import React from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, ButtonText, Icon } from "./styles";

interface Props {
  text: string;
  outline: boolean;
  icon?: string;
}

const Button: React.FC<Props> = ({ text, outline, icon }: Props) => {
  return (
    <Container outline={outline}>
      {icon != undefined ? (
        <Icon name={icon}  />
      ) : (
        <></>
      )}
      <ButtonText outline={outline}>{text}</ButtonText>
    </Container>
  );
};

export default Button;
