import React from "react";
import { View } from "react-native";

import { Container, ButtonText } from "./styles";

interface Props {
  text: string;
  outline: boolean;
}

const Button: React.FC<Props> = ({ text, outline }: Props) => {
  return (
    <Container outline={outline}>
      <ButtonText outline={outline}>{text}</ButtonText>
    </Container>
  );
};

export default Button;
