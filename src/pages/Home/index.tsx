import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Container,
  ButtonsView,
} from "./styles";
import { useAuth } from '../../hooks/auth';

const Login: React.FC = ({ navigation }) => {
  const { signOut } = useAuth();

  return (
    <Container>
      <ButtonsView>
        <Button onPress={()=> navigation.navigate('CreateStore')} outline={false} icon='store' text="Cadastrar Loja"></Button>
      </ButtonsView>
    </Container>
  );
};

export default Login;
