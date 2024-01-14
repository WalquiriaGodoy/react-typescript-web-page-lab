import React from 'react';
import FormDadosPessoais from './DadosPessoais/formDadosPessoais';
import FormEndereco from './FormEndereco/formEndereco';
import { FormButton } from '../../MaterialUI/Buttons/button';

import * as S from './styles';

type FormProps = {
  id?: number;
  form?: number;
  submitText?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RegisterForm = ({ submitText, handleClick }: FormProps) => {
  return (
    <S.FormContainer>
      <form>
        <FormDadosPessoais />
        <FormEndereco />
        <S.ButtonContainer>
          <FormButton text='Finalizar Cadastro' handleClick={handleClick} />
        </S.ButtonContainer>
      </form>
    </S.FormContainer>
  );
};

export default RegisterForm;
