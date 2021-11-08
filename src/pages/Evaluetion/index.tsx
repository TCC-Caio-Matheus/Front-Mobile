import React, { useEffect, useCallback, useState } from 'react';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useApolloClient } from '@apollo/client';
import sumBy from 'lodash/sumBy';
import { Loading, NavBar, CommentCard } from '../../components';
import { useAuth } from '../../hooks/auth';
import { QUESTION_ANSWER } from '../../graphql/query';
import { CREATE_ANSWER } from '../../graphql/mutation';
import { Container, Content, Title, TitleTip } from './styles';

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
  const [question, setQuestion] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

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

  useEffect(() => {
    getAnswer();
  }, [id]);

  return (
    <Container>
      <NavBar displayDrawer displayGoBack pageTitle="Sugestões" />
      {loading && <Loading />}

      {!loading && (
        <Content>
          {!!question && (
            <>
              {/* <Title>Pergunta: {question?.title}</Title> */}
              <Title>Dica de melhoria:</Title>
              <TitleTip>{suggestions[0]?.description}</TitleTip>
              <Title>Comentários</Title>

              {suggestions[0]?.evaluations?.map(item => (
                <CommentCard key={item.id} comment={item} />
              ))}
            </>
          )}
        </Content>
      )}
    </Container>
  );
};

export default Evaluetion;
