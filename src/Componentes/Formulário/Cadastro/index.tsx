import React from 'react';
import FormDadosPessoais from '../DadosPessoais/formDadosPessoais';
import FormEndereco from '../FormEndereco/formEndereco';
import { FormButton } from '../../MaterialUI/Buttons/button';
import { RegisterFormSchema } from './../../../Schema/registerFormSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as SC from './styles';
import { Address } from 'cluster';

type RegisterData = {
  name: string;
  phone: number;
  birthDate: number;
  cep: number;
  address: string;
  city: string;
  state: string;
  number: number;
};

const RegisterForm = () => {
  console.log('REGISTER FORM');
  const { handleSubmit } = useForm<RegisterData>({
    resolver: yupResolver(RegisterFormSchema),
  });
  console.log(handleSubmit);

  const submitForm = (data: RegisterData) => {
    console.log('DATA', data);
  };
  const onError = (errors: RegisterData) => {
    console.log('DATA', errors);
  };

  return (
    <SC.FormContainer>
      <form onSubmit={handleSubmit(submitForm)}>
        <FormDadosPessoais />
        <FormEndereco />
        {/* <SC.ButtonContainer>
          <FormButton text='Finalizar Cadastro' />
        </SC.ButtonContainer> */}
        <button type='submit'> Test</button>
      </form>
    </SC.FormContainer>
  );
};

export default RegisterForm;
