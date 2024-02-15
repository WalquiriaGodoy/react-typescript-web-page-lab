import { Input } from 'src/design-system/Input';
import { SubmitButton } from 'src/design-system/SubmitButton';
import { useForm } from 'react-hook-form';
import * as S from './LeadForm.styles';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const LeadForm = () => {
  type createLeadDataProps = z.infer<typeof createLeadSchema>;

  const createLeadSchema = z.object({
    name: z.string().min(1, 'O nome é obrigatório'),
    surname: z.string().min(1, 'O sobrenome é obrigatório'),
    email: z.string().min(1, 'O email é obrigatório').email('Email inválido'),
    telephone: z.string().min(1, 'O whatsapp é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createLeadDataProps>({
    resolver: zodResolver(createLeadSchema),
  });

  console.log('ERRORS', errors);

  const createLead = (data: any) => {
    console.log(data);
  };

  return (
    <S.LeadFormContainer onSubmit={handleSubmit(createLead)}>
      <Input
        label='Nome'
        type='name'
        register={register}
        message={errors.name?.message}
      />
      <Input
        label='Sobrenome'
        type='surname'
        register={register}
        message={errors.surname?.message}
      />
      <Input
        label='Email'
        type='email'
        register={register}
        message={errors.email?.message}
      />
      <Input
        label='Whatsapp'
        type='telephone'
        mask='(99) 99999-9999'
        register={register}
        message={errors.telephone?.message}
      />

      <SubmitButton text='Enviar' />
    </S.LeadFormContainer>
  );
};
