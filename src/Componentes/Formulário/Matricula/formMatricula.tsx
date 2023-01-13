import { FormButton } from '../../MaterialUI/Buttons/button';
import { ThemeProvider } from '@mui/material/styles';
import { labTheme } from '../../MaterialUI/Theme/colorTheme';
import { LabelContainer, FormContainer, InputContainer } from './styles';

type FormProps = {
  submitText: string;
};

function FormMatricula({ submitText }: FormProps) {
  return (
    <FormContainer>
      <LabelContainer>Nome</LabelContainer>
      <InputContainer />

      <div className='formulario-item-caixa'>
        <ThemeProvider theme={labTheme}>
          <FormButton texto={submitText} />
        </ThemeProvider>
      </div>
    </FormContainer>
  );
}

export default FormMatricula;
