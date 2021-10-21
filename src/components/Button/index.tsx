import React from 'react';

import { Container, ButtonText, Icon } from './styles';

interface Props {
  text: string;
  outline: boolean;
  icon?: string;
  onPress: any;
}

const Button: React.FC<Props> = ({ text, outline, icon, onPress }: Props) => {
  return (
    <Container outline={outline} onPress={onPress}>
      {icon !== undefined ? <Icon name={icon} /> : <></>}
      <ButtonText outline={outline}>{text}</ButtonText>
    </Container>
  );
};

export default Button;
