import React from 'react';
// import { ActivityIndicator, View } from 'react-native';

import { useAuth } from '../hooks/auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  // if (loading) {
  //   return (
  //     <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
  //       <ActivityIndicator size="large" color="#7793CB" />
  //     </View>
  //   );
  // }

  if (user) {
    return <AppRoutes />;
  }

  return <AuthRoutes />;
};

export default Routes;
