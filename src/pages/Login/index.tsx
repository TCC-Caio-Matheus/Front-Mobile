import React, { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Image from '../../../assets';
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
  Logo,
} from './styles';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = ({ navigation }) => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const handleSignIn = useCallback(() => {
    signIn({
      email,
      password,
    });
  }, [email, password]);

  return (
    <Container>
      <ImageView>
        <Logo source={Image.LOGO} />
      </ImageView>
      <InputView>
        <Input
          text="Email"
          placeholder="Digite o email"
          keyboardType="default"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Input
          text="Senha"
          placeholder="Digite a senha"
          keyboardType="default"
          secureTextEntry
          value={password}
          onChangeText={value => setpassword(value)}
        />
      </InputView>
      <ButtonsView>
        <Button onPress={handleSignIn} outline={false} text="ENTRAR" />
        <RegisteLinkView onPress={() => navigation.navigate('SignUp')}>
          <RegisterLink>Não tem uma conta ? </RegisterLink>
          <AccentLink>Registrar</AccentLink>
        </RegisteLinkView>
      </ButtonsView>
    </Container>
  );
};

export default Login;
