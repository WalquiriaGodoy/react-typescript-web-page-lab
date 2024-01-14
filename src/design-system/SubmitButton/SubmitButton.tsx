import { FormButton } from '../../Componentes/MaterialUI/Buttons/button';
import { ThemeProvider } from '@mui/material/styles';
import { labTheme } from '../../Componentes/MaterialUI/Theme/colorTheme';
import { SubmitButtonContainer } from './SubmitButton.styles';

type SubmitButtonProps = {
  text: string;
};

export const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <SubmitButtonContainer>
      <ThemeProvider theme={labTheme}>
        <FormButton text={text} />
      </ThemeProvider>
    </SubmitButtonContainer>
  );
};
