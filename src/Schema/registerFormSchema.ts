import * as yup from 'yup';

export const RegisterFormSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
  birthDate: yup.date(),
});
