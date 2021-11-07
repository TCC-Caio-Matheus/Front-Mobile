import React, { useCallback, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';
import { PieChart } from 'react-native-chart-kit';
import { useTheme } from 'styled-components';
import Button from '../../components/Button';
import { CardSelect, Loading, NavBar } from '../../components';
import metrics from '../../utils/metrics';
import { useAuth } from '../../hooks/auth';
import { QUIZZES } from '../../graphql/query';
import { Container, ButtonsView, Icon, Content, Title } from './styles';

const Login: React.FC = ({ navigation }) => {
  const { signOut, user, store } = useAuth();
  const client = useApolloClient();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const getQuizzes = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: QUIZZES,
        fetchPolicy: 'no-cache',
        // variables: {
        //   where: {
        //     stores: {
        //       id: store?.id,
        //     },
        //   },
        // },
      });

      setQuizzes(data.quizzes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [user, store]);

  useEffect(() => {
    getQuizzes();
  }, []);

  const data = [
    {
      name: 'Respondidas',
      population: 100,
      color: `rgba(137, 166, 126, 1)`,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Não-Resp.',
      population: 10,
      color: `rgba(137, 166, 126, 0.2)`,
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: `rgba(255, 255, 255, 0)`,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: `rgba(255, 255, 255, 0)`,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(137, 166, 126, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <Container>
      <NavBar displayDrawer pageTitle={store?.name} />
      {loading && <Loading />}

      {!loading && !store && (
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

      {!loading && store && (
        <Content>
          <Title>Informações</Title>

          <PieChart
            data={data}
            width={metrics.SCREEN_WIDTH * 0.9}
            height={180}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="0"
            style={{ marginBottom: 30 }}
          />
          <Title>Questionários</Title>
          {quizzes.map(item => (
            <CardSelect
              key={item.id}
              icon={<Icon name="document-text-outline" />}
              title={item.name}
              subTitle={`${item.questions.length} perguntas`}
              onPress={() =>
                navigation.navigate('ListQuestions', { id: item.id })
              }
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default Login;
