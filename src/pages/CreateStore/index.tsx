import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useApolloClient } from '@apollo/client';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { SelectButton } from '../../components';
import { CREATE_STORE } from '../../graphql/mutation';

import { Container, InputView, ButtonsView, ImageView } from './styles';
import { useAuth } from '../../hooks/auth';

const SCHEMA = Yup.object().shape({
  name: Yup.string().required('Username obrigatório'),
  segment: Yup.string().required('Username obrigatório'),
});

const CreateStore: React.FC = ({ navigation }) => {
  const client = useApolloClient();
  const { user } = useAuth();

  const handleCreate = useCallback(
    async dataValues => {
      try {
        const { name, segment } = dataValues;

        await client.mutate({
          mutation: CREATE_STORE,
          variables: {
            input: {
              data: {
                name,
                type: segment,
                user: user.id,
              },
            },
          },
        });
        navigation.navigate('Home');
      } catch (error) {
        console.log(error);
      }
    },
    [user],
  );

  const formik = useFormik({
    initialValues: {
      name: '',
      segment: '',
    },
    enableReinitialize: true,
    validationSchema: SCHEMA,
    onSubmit: handleCreate,
  });

  return (
    <Container>
      <ImageView />
      <InputView>
        <Input
          text="Nome da loja"
          value={formik.values.name}
          onChangeText={formik.handleChange('name')}
        />

        <SelectButton
          placeholder={{
            label: 'Selecione',
            value: null,
          }}
          label="Segmento da loja"
          onValueChange={formik.handleChange('segment')}
          value={formik.values.segment}
          items={[
            { value: 'JEWELERY', label: 'Jóias' },
            { value: 'PETSHOP', label: 'Petshop' },
            { value: 'FOOD', label: 'Alimentação' },
            { value: 'FASHION', label: 'Moda' },
            { value: 'AUTOMOTIVE', label: 'Automotivo' },
            { value: 'FURNITURE', label: 'Móveis' },
            { value: 'PERFUMERY', label: 'Perfumaria' },
            { value: 'TOYS', label: 'Brinquedos' },
            { value: 'COURSES', label: 'Cursos' },
            { value: 'DIGITAL_PRODUCTS', label: 'Produtos Digitais' },
            { value: 'OTHERS', label: 'Outros' },
          ]}
        />
      </InputView>
      <ButtonsView>
        <Button onPress={formik.submitForm} outline={false} text="Cadastrar" />
      </ButtonsView>
    </Container>
  );
};

export default CreateStore;
