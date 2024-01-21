import { UseFormRegister } from 'react-hook-form';
import * as S from './Input.styles';

type InputProps = {
  label: string;
  type: 'name' | 'email' | 'surname' | 'telephone';
  message?: string;
  register: UseFormRegister<{
    name: string;
    email: string;
    surname: string;
    telephone: string;
  }>;
};

export const Input = ({ label, type, register, message }: InputProps) => {
  return (
    <S.ItenContainer>
      <S.LabelContainer>{label}</S.LabelContainer>
      <S.InputContainer type={type} {...register(type)} />
      <S.MessageContainer>{message}</S.MessageContainer>
    </S.ItenContainer>
  );
};
