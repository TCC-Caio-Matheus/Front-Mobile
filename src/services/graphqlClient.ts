import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: `https://strapi-bakckend-tcc.herokuapp.com/graphql`,
});

const cache = new InMemoryCache();

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('@e-provement:token');
  return {
    headers: {
      ...headers,
      Authorization: token !== null ? `Bearer ${token}` : '',
    },
  };
});

const httpAuthLink = authLink.concat(httpLink);

export default new ApolloClient({
  link: from([httpAuthLink]),
  cache,
});
