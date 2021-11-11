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
import { QUESTION_ANSWER } from '../../graphql/query';
import { CREATE_COMMENT } from '../../graphql/mutation';
import {
  Container,
  Content,
  Title,
  TitleTip,
  SuggestContainer,
} from './styles';

type ParamList = {
  Evaluetion: {
    id: number;
    type: string;
  };
};

const Evaluetion: React.FC = () => {
  const { signOut, user, store } = useAuth();
  const navigation = useNavigation();
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);
  const [loadingComment, setLoadingComment] = useState(false);
  const [question, setQuestion] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [comment, setComment] = useState('');

  const {
    params: { id },
  } = useRoute<RouteProp<ParamList, 'Evaluetion'>>();

  const filterSuggestions = useCallback(async (suggestion, answers) => {
    const answersValue = sumBy(answers[0].question_options, item => item.score);
    const suggestionsValue = suggestion.filter(
      item => item.range_min <= answersValue && item.range_max >= answersValue,
    );
    setSuggestions(suggestionsValue);
  }, []);

  const getAnswer = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: QUESTION_ANSWER,
        fetchPolicy: 'no-cache',
        variables: {
          where: {
            id,
          },
          whereStore: {
            store: store?.id,
          },
        },
      });

      setQuestion(data.questions[0]);
      filterSuggestions(
        data.questions[0].suggestions,
        data.questions[0].answers,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, id, store]);

  const getAnswers = useCallback(() => {
    getAnswer();
  }, [id]);

  useFocusEffect(getAnswers);

  const handleComment = useCallback(
    async suggestionId => {
      try {
        setLoadingComment(true);
        await client.mutate({
          mutation: CREATE_COMMENT,
          fetchPolicy: 'no-cache',
          variables: {
            input: {
              data: {
                description: comment,
                suggestion: suggestionId,
                user: user?.id,
              },
            },
          },
        });
        setComment('');
        getAnswer();
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingComment(false);
      }
    },
    [comment, user],
  );

  return (
    <Container>
      <NavBar displayDrawer displayGoBack pageTitle="Sugestões" />
      {loading && <Loading />}

      {!loading && (
        <>
          <Content>
            {!!question && (
              <>
                {/* <Title>Pergunta: {question?.title}</Title> */}
                <Title>Dica de melhoria:</Title>
                <SuggestContainer>
                  <TitleTip>{suggestions[0]?.description}</TitleTip>
                </SuggestContainer>

                {!!suggestions[0].evaluations.length && (
                  <Title>Comentários</Title>
                )}

                {suggestions[0]?.evaluations?.map(item => (
                  <CommentCard
                    key={item.id}
                    comment={item}
                    onPress={() =>
                      navigation.navigate('CommentEvaluetion', { id: item?.id })
                    }
                  />
                ))}
              </>
            )}
          </Content>

          <CommentInput
            onChangeText={setComment}
            value={comment}
            handleComment={() => handleComment(suggestions[0]?.id)}
            loading={loadingComment}
          />
        </>
      )}
    </Container>
  );
};

export default Evaluetion;
