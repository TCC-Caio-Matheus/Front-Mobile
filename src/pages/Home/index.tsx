import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Container,
  InputView,
  ForgotPassword,
  ForgotPasswordButton,
  ButtonsView,
  RegisterLink,
  AccentLink,
  RegisteLinkView,
  ImageView,
} from "./styles";
import { useAuth } from '../../hooks/auth';

const Login: React.FC = ({ navigation }) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <ButtonsView>
        <Button onPress={signOut} outline={false} text="ENTRAR"></Button>
      </ButtonsView>
    </Container>
  );
};

export default Login;
