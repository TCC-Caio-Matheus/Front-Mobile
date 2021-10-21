import React from "react";

import { Container, DefaultInput, Title } from "./styles";

interface Props {
  text: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  keyboardType?: "default" | "numeric" | "email-address";
  secureTextEntry?: boolean;
}

const Input: React.FC<Props> = ({
  text,
  placeholder,
  onChange,
  keyboardType,
  secureTextEntry = false,
}) => {
  return (
    <Container>
      <Title>{text}</Title>
      <DefaultInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChange}
      ></DefaultInput>
    </Container>
  );
};

export default Input;
