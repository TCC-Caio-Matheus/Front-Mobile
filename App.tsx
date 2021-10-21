import React from "react";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppRoute from './src';
import { ApolloProvider } from '@apollo/client';
import client from './src/services/graphqlClient';
import AppProvider from './src/hooks';
import './src/config/Reactotron';
import theme from "./src/global/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <AppRoute />
        </AppProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
