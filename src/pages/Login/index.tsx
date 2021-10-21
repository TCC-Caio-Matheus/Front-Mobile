import React from "react";
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

const Login: React.FC = ({ navigation }) => {
  return (
    <Container>
      <ImageView></ImageView>
      <InputView>
        <Input text="Email" keyboardType="default" />
        <Input text="Senha" keyboardType="default" password={true} />
      </InputView>
      <ButtonsView>
        <Button onPress={() => navigation.navigate('Login')} outline={false} text="ENTRAR"></Button>
        <RegisteLinkView>
          <RegisterLink>Não tem uma conta ? </RegisterLink>
          <AccentLink>Registrar</AccentLink>
        </RegisteLinkView>
      </ButtonsView>
    </Container>
  );
};

export default Login;
