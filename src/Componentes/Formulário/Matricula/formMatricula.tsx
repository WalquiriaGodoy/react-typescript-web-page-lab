import { FormButton } from '../../MaterialUI/Buttons/button';
import { ThemeProvider } from '@mui/material/styles';
import { labTheme } from '../../MaterialUI/Theme/colorTheme';
import {
  LabelContainer,
  FormContainer,
  InputContainer,
  ButtonContainer,
  ItenContainer,
} from './styles';

type FormProps = {
  submitText: string;
};

function FormMatricula({ submitText }: FormProps) {
  return (
    <FormContainer>
      <ItenContainer>
        <LabelContainer>Nome</LabelContainer>
        <InputContainer />
      </ItenContainer>
      <ItenContainer>
        <LabelContainer>Telefone</LabelContainer>
        <InputContainer />
      </ItenContainer>

      <ButtonContainer>
        <ThemeProvider theme={labTheme}>
          <FormButton texto={submitText} />
        </ThemeProvider>
      </ButtonContainer>
    </FormContainer>
  );
}

export default FormMatricula;
