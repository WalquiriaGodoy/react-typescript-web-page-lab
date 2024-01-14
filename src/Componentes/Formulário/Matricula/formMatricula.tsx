import { Input } from 'src/design-system/Input';
import { FormContainer } from './styles';
import { SubmitButton } from 'src/design-system/SubmitButton';

function FormMatricula() {
  return (
    <FormContainer>
      <Input label='Nome' name='name' type='text' id='name' required />
      <Input label='Email' name='email' type='email' id='email' required />
      <SubmitButton text={'Fazer Matricula'} />
    </FormContainer>
  );
}

export default FormMatricula;
