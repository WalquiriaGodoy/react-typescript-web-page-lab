import * as S from './Input.styles';

type InputProps = {
  label: string;
  type: string;
  name: string;
  id: string;
  required: boolean;
};

export const Input = ({ label, type, name, id, required }: InputProps) => {
  return (
    <S.ItenContainer>
      <S.LabelContainer>{label}</S.LabelContainer>
      <S.InputContainer type={type} name={name} id={id} required={required} />
    </S.ItenContainer>
  );
};
