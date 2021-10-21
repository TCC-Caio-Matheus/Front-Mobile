import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useApolloClient } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutation'
interface AuthState {
  token: string | null;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const client = useApolloClient();

  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@e-provement:token',
        '@e-provement:user',
      ]);
      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1] || '') });
      }

      setLoading(false);
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      const response = await client.mutate({
        mutation: AUTHENTICATE,
        variables: {
          input: {
            identifier: email,
            password,
          },
        },
      });

      const { user, jwt } = response.data.login;

      await AsyncStorage.setItem('@e-provement:token', jwt);
      await AsyncStorage.setItem('@e-provement:user', JSON.stringify(user));

      setData({ token: jwt, user });
    },
    [],
  );

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@e-provement:token');
    await AsyncStorage.removeItem('@e-provement:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be user within  an AuthProviver');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
