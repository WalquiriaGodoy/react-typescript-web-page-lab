import { Input } from 'src/design-system/Input';
import { SubmitButton } from 'src/design-system/SubmitButton';
import * as S from './LeadForm.styles';

export const LeadForm = () => {
  return (
    <S.LeadFormContainer>
      <Input label='Nome' name='name' type='text' id='name' required />
      <Input
        label='Sobrenome'
        name='surname'
        type='text'
        id='surname'
        required
      />
      <Input label='Email' name='email' type='email' id='email' required />
      <Input
        label='Telefone'
        name='telephone'
        type='number'
        id='telephone'
        required
      />
      <SubmitButton text='Enviar' />
    </S.LeadFormContainer>
  );
};
