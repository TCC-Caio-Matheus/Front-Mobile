import React, { useCallback, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import find from 'lodash/find';
import {
  CardSelect,
  Loading,
  NavBar,
  SingleQuestion,
  Button,
  MultipleQuestion,
} from '../../components';
import { useAuth } from '../../hooks/auth';
import { QUESTION } from '../../graphql/query';
import { CREATE_ANSWER } from '../../graphql/mutation';
import {
  Container,
  Circle,
  Icon,
  Content,
  Title,
  TitleQuestion,
} from './styles';

type ParamList = {
  ListQuestion: {
    id: number;
    type: string;
  };
};

const ListQuestions: React.FC = () => {
  const { signOut, user } = useAuth();
  const navigation = useNavigation();
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);
  const [loadingAnswer, setLoadingAnswer] = useState(false);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState([]);

  const {
    params: { id, type },
  } = useRoute<RouteProp<ParamList, 'ListQuestion'>>();

  const getAnswer = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: QUESTION,
        fetchPolicy: 'no-cache',
        variables: {
          id,
        },
      });

      setQuestion(data.question);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, id]);

  useEffect(() => {
    getAnswer();
  }, [id]);

  const handleAnswer = useCallback(async () => {
    try {
      setLoadingAnswer(true);
      await client.mutate({
        mutation: CREATE_ANSWER,
        variables: {
          input: {
            data: {
              store: 1,
              question_options: answer,
              question: question?.id,
              quiz: question?.quiz.id,
            },
          },
        },
      });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingAnswer(false);
    }
  }, [question, answer]);

  return (
    <Container>
      <NavBar displayDrawer displayGoBack pageTitle="Questões" />
      {loading && <Loading />}

      {!loading && (
        <Content>
          {!!question && (
            <>
              <TitleQuestion>{question?.quiz?.name}</TitleQuestion>
              <Title>{question?.title}</Title>

              {type === 'SINGLE_CHOICE' && (
                <SingleQuestion
                  options={question.question_options}
                  setAnswer={setAnswer}
                  answer={answer}
                />
              )}

              {type === 'MULTIPLE_CHOICE' && (
                <MultipleQuestion
                  options={question.question_options}
                  setAnswer={setAnswer}
                  answer={answer}
                />
              )}

              <Button
                onPress={handleAnswer}
                outline={false}
                text="Responder"
                loading={loadingAnswer}
              />
            </>
          )}
        </Content>
      )}
    </Container>
  );
};

export default ListQuestions;
