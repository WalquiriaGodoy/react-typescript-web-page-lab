import { FieldValues, UseFormRegister } from 'react-hook-form';
import * as S from './Input.styles';

type InputProps = {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
};

export const Input = ({ label, type, register }: InputProps) => {
  return (
    <S.ItenContainer>
      <S.LabelContainer>{label}</S.LabelContainer>
      <S.InputContainer type={type} {...register(type)} />
    </S.ItenContainer>
  );
};
