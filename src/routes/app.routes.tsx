import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, CreateStore, ListQuestions, AnswerQuestion } from '../pages';

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
      <Auth.Screen name="ListQuestions" component={ListQuestions} />
      <Auth.Screen name="AnswerQuestion" component={AnswerQuestion} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
