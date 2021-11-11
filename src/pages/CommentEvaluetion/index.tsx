import React, { useEffect, useCallback, useState } from 'react';

import {
  useNavigation,
  useRoute,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import { useApolloClient } from '@apollo/client';
import sumBy from 'lodash/sumBy';
import { Loading, NavBar, CommentCard, CommentInput } from '../../components';
import { useAuth } from '../../hooks/auth';
import { EVALUATIONS } from '../../graphql/query';
import { CREATE_COMMENT } from '../../graphql/mutation';
import {
  Container,
  Content,
  Title,
  TitleTip,
  SuggestContainer,
  CommentContainer,
  Comment,
  SendButton,
  Icon,
  Touchable,
} from './styles';

type ParamList = {
  CommentEvaluetion: {
    id: number;
    type: string;
  };
};

const CommentEvaluetion: React.FC = () => {
  const { signOut, user, store } = useAuth();
  const navigation = useNavigation();
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);
  const [comment, setComment] = useState('');
  const [evaluation, setEvaluation] = useState(null);

  const {
    params: { id },
  } = useRoute<RouteProp<ParamList, 'CommentEvaluetion'>>();

  const getEvaluations = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: EVALUATIONS,
        fetchPolicy: 'no-cache',
        variables: {
          id,
        },
      });
      setEvaluation(data.evaluation);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, id, store]);

  const getEvaluation = useCallback(() => {
    getEvaluations();
  }, [id]);

  useFocusEffect(getEvaluation);

  const handleComment = useCallback(async () => {
    try {
      setLoadingComment(true);
      await client.mutate({
        mutation: CREATE_COMMENT,
        fetchPolicy: 'no-cache',
        variables: {
          input: {
            data: {
              description: comment,
              evaluation: String(id),
              user: user?.id,
            },
          },
        },
      });
      setComment('');
      getEvaluations();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingComment(false);
    }
  }, [comment, id, user]);

  return (
    <Container>
      <NavBar displayDrawer displayGoBack pageTitle="Comentários" />
      {loading && <Loading />}

      {!loading && (
        <>
          <Content>
            {!!evaluation && (
              <>
                <CommentCard
                  key={evaluation.id}
                  comment={evaluation}
                  onPress={() => {}}
                  isComment
                />

                {evaluation?.evaluations?.map(item => (
                  <CommentCard
                    key={item.id}
                    comment={item}
                    onPress={() => {}}
                    isComment
                  />
                ))}
              </>
            )}
          </Content>

          <CommentInput
            onChangeText={setComment}
            value={comment}
            handleComment={handleComment}
            loading={loadingComment}
          />
        </>
      )}
    </Container>
  );
};

export default CommentEvaluetion;
