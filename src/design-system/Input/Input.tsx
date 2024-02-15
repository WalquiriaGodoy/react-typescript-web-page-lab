import { UseFormRegister } from 'react-hook-form';
import * as S from './Input.styles';

type InputProps = {
  label: string;
  type: 'name' | 'email' | 'surname' | 'telephone';
  mask?: string;
  message?: string;
  register: UseFormRegister<{
    name: string;
    email: string;
    surname: string;
    telephone: string;
  }>;
};

export const Input = ({ label, type, register, message, mask }: InputProps) => {
  const TotalInput = (
    <S.ItenContainer>
      <S.LabelContainer>{label}</S.LabelContainer>
      {mask ? (
        <S.InputContainerMask mask={mask} {...register(type)} />
      ) : (
        <S.InputContainer {...register(type)} />
      )}
      <S.MessageContainer>{message}</S.MessageContainer>
    </S.ItenContainer>
  );

  return TotalInput;
};
