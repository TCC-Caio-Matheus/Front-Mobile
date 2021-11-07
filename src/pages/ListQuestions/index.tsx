import React, { useCallback, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import {
  useNavigation,
  useRoute,
  RouteProp,
  useFocusEffect,
} from '@react-navigation/native';
import find from 'lodash/find';
import { CardSelect, Loading, NavBar } from '../../components';
import { useAuth } from '../../hooks/auth';
import { QUESTIONS, ANSWERS } from '../../graphql/query';
import { Container, Circle, Icon, Content, Title } from './styles';

type ParamList = {
  ListQuestion: {
    id: number;
  };
};

const ListQuestions: React.FC = () => {
  const { signOut, user } = useAuth();
  const client = useApolloClient();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const {
    params: { id },
  } = useRoute<RouteProp<ParamList, 'ListQuestion'>>();

  const getQuestions = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: QUESTIONS,
        fetchPolicy: 'no-cache',
        variables: {
          where: {
            quiz: {
              id,
            },
          },
        },
      });

      setQuestions(data.questions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, id]);

  const getAnswers = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        fetchPolicy: 'no-cache',
        query: ANSWERS,
        variables: {
          where: {
            quiz: {
              id,
            },
          },
        },
      });

      setAnswers(data.answers);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, id]);

  const getList = useCallback(() => {
    getQuestions();
    getAnswers();
  }, [id]);

  useFocusEffect(getList);

  const handleNavigation = useCallback(
    item => {
      const isAnswer = !!find(
        answers,
        answer => answer.question.id === item.id,
      );
      if (isAnswer) {
        navigation.navigate('Evaluetion', { id: item.id });
      } else {
        navigation.navigate('AnswerQuestion', { id: item.id, type: item.type });
      }
    },
    [answers],
  );

  return (
    <Container>
      <NavBar displayDrawer displayGoBack pageTitle="Questões" />
      {loading && <Loading />}

      {!loading && questions.length > 0 && (
        <Content>
          <Title>Questões</Title>
          {questions.map(item => (
            <CardSelect
              key={item.id}
              icon={
                <Circle
                  check={
                    !!find(answers, answer => answer?.question?.id === item.id)
                  }
                >
                  <Icon name="check" check />
                </Circle>
              }
              title={item.title}
              onPress={() => handleNavigation(item)}
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default ListQuestions;
