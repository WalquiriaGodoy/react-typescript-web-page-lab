import React from 'react';
import FormDadosPessoais from './DadosPessoais/formDadosPessoais';
import FormEndereco from './FormEndereco/formEndereco';
import { FormButton } from '../../MaterialUI/Buttons/button';

import * as SC from './styles';

type FormProps = {
  id?: number;
  form?: number;
  submitText?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RegisterForm = ({ submitText, handleClick }: FormProps) => {
  return (
    <SC.FormContainer>
      <form>
        <FormDadosPessoais />
        <FormEndereco />
        <SC.ButtonContainer>
          <FormButton text='Finalizar Cadastro' handleClick={handleClick} />
        </SC.ButtonContainer>
      </form>
    </SC.FormContainer>
  );
};

export default RegisterForm;
