import React, { useCallback, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import Button from '../../components/Button';
import { CardSelect, Loading, NavBar } from '../../components';

import { useAuth } from '../../hooks/auth';
import { QUIZZES } from '../../graphql/query';
import { Container, ButtonsView, Icon, Content, Title } from './styles';

const Login: React.FC = ({ navigation }) => {
  const { signOut, user } = useAuth();
  const client = useApolloClient();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getQuizzes = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: QUIZZES,
        variables: {
          where: {
            stores: {
              id: 1,
            },
          },
        },
      });

      setQuizzes(data.quizzes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <Container>
      <NavBar displayDrawer pageTitle="Informe de rendimentos" />
      {loading && <Loading />}

      {!loading && quizzes.length === 0 && (
        <ButtonsView>
          <Title style={{ textAlign: 'center' }}>
            Voce ainda não tem nenhuma loja cadastrada
          </Title>
          <Button
            onPress={() => navigation.navigate('CreateStore')}
            outline={false}
            icon="store"
            text="Cadastrar Loja"
          />
        </ButtonsView>
      )}

      {!loading && quizzes.length > 0 && (
        <Content>
          <Title>Informações</Title>
          <Title>Questionários</Title>
          {quizzes.map(item => (
            <CardSelect
              key={item.id}
              icon={<Icon name="document-text-outline" />}
              title={item.name}
              subTitle={`${item.questions.length} perguntas`}
              onPress={() => navigation.navigate('ListQuestions', { id: 1 })}
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default Login;
