import React from "react";

import { Container, DefaultInput, Title } from "./styles";

interface Props {
  text: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  keyboardType?: "default" | "numeric" | "email-address";
  password?: boolean;
}

const Input: React.FC<Props> = ({
  text,
  placeholder,
  onChange,
  keyboardType,
  password,
}) => {
  return (
    <Container>
      <Title>{text}</Title>
      <DefaultInput
        secureTextEntry={password}
        placeholder={placeholder}
        keyboardType={keyboardType}
      ></DefaultInput>
    </Container>
  );
};

export default Input;
