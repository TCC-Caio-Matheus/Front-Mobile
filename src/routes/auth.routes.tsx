import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Login, SignUp } from '../pages';

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {

  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
