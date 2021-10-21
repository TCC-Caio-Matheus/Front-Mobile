import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Home } from '../pages';

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Auth.Screen name="Home" component={Home} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
