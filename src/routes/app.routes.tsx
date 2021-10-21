import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Home, CreateStore } from '../pages';

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
      <Auth.Screen name="CreateStore" component={CreateStore} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
