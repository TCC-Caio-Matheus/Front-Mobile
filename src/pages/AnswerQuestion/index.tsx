import React, { useCallback, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import find from 'lodash/find';
import { CardSelect, Loading, NavBar } from '../../components';
import { useAuth } from '../../hooks/auth';
import { QUESTION } from '../../graphql/query';
import { Container, Circle, Icon, Content, Title } from './styles';

type ParamList = {
  ListQuestion: {
    id: number;
  };
};

const ListQuestions: React.FC = () => {
  const { signOut, user } = useAuth();
  const client = useApolloClient();
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const {
    params: { id },
  } = useRoute<RouteProp<ParamList, 'ListQuestion'>>();

  const getAnswer = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: QUESTION,
        variables: {
          id,
        },
      });

      setAnswers(data.question);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, id]);

  useEffect(() => {
    getAnswer();
  }, [id]);

  const handleNavigation = useCallback(
    item => {
      const isAnswer = !!find(
        answers,
        answer => answer.question.id === item.id,
      );
      if (isAnswer) {
        navigation.navigate('ListQuestions');
      } else {
        navigation.navigate('ListQuestions');
      }
    },
    [answers],
  );

  return (
    <Container>
      <NavBar displayDrawer displayGoBack pageTitle="Questões" />
      {loading && <Loading />}

      {!loading && (
        <Content>
          <Title>AnswerQuestion</Title>
        </Content>
      )}
    </Container>
  );
};

export default ListQuestions;
