import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
// import * as Updates from 'expo-updates';

import Routes from './routes';
// import { lightTheme } from './styles/colors';
// import AppProvider from './hooks';

const App: React.FC = () => {
  // const updateApp = async () => {
  //   if (!__DEV__) {
  //     const { isAvailable } = await Updates.checkForUpdateAsync();

  //     if (isAvailable) {
  //       await Updates.fetchUpdateAsync();
  //       await Updates.reloadAsync();
  //     }
  //   }
  // };

  // useEffect(() => {
  //   updateApp();
  // }, []);

  return (
    <NavigationContainer>
      {/* <ThemeProvider theme={lightTheme}> */}
        <StatusBar style="dark" />
        {/* <AppProvider> */}
          <View style={{ flex: 1 }}>
            <Routes />
          </View>
        {/* </AppProvider> */}
      {/* </ThemeProvider> */}
    </NavigationContainer>
  );
};

export default App;
