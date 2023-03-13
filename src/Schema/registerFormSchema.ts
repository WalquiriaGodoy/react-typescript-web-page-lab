import * as yup from 'yup';

export const RegisterFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  phone: yup.number().required(),
  birthDate: yup.date(),
});
