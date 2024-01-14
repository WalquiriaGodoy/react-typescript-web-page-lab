import { Input } from 'src/design-system/Input';
import { SubmitButton } from 'src/design-system/SubmitButton';
import { useForm } from 'react-hook-form';
import * as S from './LeadForm.styles';

export const LeadForm = () => {
  const { register, handleSubmit } = useForm();

  const createLead = (data: any) => {
    console.log(data);
  };

  return (
    <S.LeadFormContainer onSubmit={handleSubmit(createLead)}>
      <Input label='Nome' type='name' register={register} />
      <Input label='Sobrenome' type='surname' register={register} />
      <Input label='Email' type='email' register={register} />
      <Input label='Whatsapp' type='telephone' register={register} />

      <SubmitButton text='Enviar' />
    </S.LeadFormContainer>
  );
};
