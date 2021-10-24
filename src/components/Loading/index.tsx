import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

const Loading: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <ActivityIndicator color={themeContext.colors.primary} size="large" />
    </Container>
  );
};

export default Loading;
