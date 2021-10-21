import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useApolloClient } from '@apollo/client';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { REGISTER } from '../../graphql/mutation';

import {
  Container,
  InputView,
  ButtonsView,
  RegisterLink,
  AccentLink,
  RegisteLinkView,
  ImageView,
} from './styles';

const SCHEMA = Yup.object().shape({
  username: Yup.string().required('Username obrigatório'),
  email: Yup.string().required('Username obrigatório'),
  password: Yup.string().required('Username obrigatório'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Senha incompatível')
    .required('Username obrigatório'),
});

const SignUp: React.FC = ({ navigation }) => {
  const client = useApolloClient();

  const handleSignUp = useCallback(async dataValues => {
    try {
      const { username, email, password } = dataValues;

      await client.mutate({
        mutation: REGISTER,
        variables: {
          input: {
            username,
            email,
            password,
          },
        },
      });
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: handleSignUp,
  });

  return (
    <Container>
      <ImageView />
      <InputView>
        <Input
          text="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
        />
        <Input
          text="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
        />
        <Input
          text="Senha"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          secureTextEntry
        />
        <Input
          text="Confirmar Senha"
          value={formik.values.passwordConfirmation}
          onChangeText={formik.handleChange('passwordConfirmation')}
          secureTextEntry
        />
      </InputView>
      <ButtonsView>
        <Button onPress={formik.submitForm} outline={false} text="Cadastrar" />
        <RegisteLinkView onPress={() => navigation.navigate('Login')}>
          <RegisterLink>Já tem conta ? </RegisterLink>
          <AccentLink>Login</AccentLink>
        </RegisteLinkView>
      </ButtonsView>
    </Container>
  );
};

export default SignUp;
