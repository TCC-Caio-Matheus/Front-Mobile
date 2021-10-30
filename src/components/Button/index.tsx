import React from 'react';

import { ActivityIndicator } from 'react-native';
import { Container, ButtonText, Icon } from './styles';

interface Props {
  text: string;
  outline: boolean;
  icon?: string;
  onPress: any;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  outline,
  icon,
  onPress,
  loading = false,
}: Props) => {
  return (
    <Container outline={outline} onPress={onPress}>
      {icon !== undefined ? <Icon name={icon} /> : <></>}

      {!loading ? (
        <ButtonText outline={outline}>{text}</ButtonText>
      ) : (
        <ActivityIndicator size="small" color={outline ? 'black' : 'white'} />
      )}
    </Container>
  );
};

export default Button;
