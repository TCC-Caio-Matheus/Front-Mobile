import React from "react";

import { Container, DefaultInput, Title } from "./styles";

interface Props {
  text: string;
  value: string;
  placeholder?: string;
  onChangeText?: (value: string) => void;
  keyboardType?: "default" | "numeric" | "email-address";
  secureTextEntry?: boolean;
}

const Input: React.FC<Props> = ({
  text,
  placeholder,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  value
}) => {
  return (
    <Container>
      <Title>{text}</Title>
      <DefaultInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      ></DefaultInput>
    </Container>
  );
};

export default Input;
