/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const [scriptHostname = ''] = scriptURL.split('://')[1].split(':');

  const tron = Reactotron.configure({
    name: 'E-proviment',
    host: scriptHostname,
  })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  tron.clear();

  console.tron = tron;
}
