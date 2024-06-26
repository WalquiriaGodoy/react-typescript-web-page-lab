import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const SmallButton = styled(Button)({
  backgroundColor: '#B13737',
  borderRadius: '10px',
  width: '100px',
}) as typeof Button;

const LargeButton = styled(Button)({
  backgroundColor: '#B13737',
  color: 'white',
  borderRadius: '10px',
  width: '100%',
  height: '100%',
  marginTop: '20px',
}) as typeof Button;

type FormButtonProps = {
  text?: string;
};

type LinkButtonProps = {
  texto: string;
  path: string;
};

export function FormButton({ text }: FormButtonProps) {
  return (
    <LargeButton
      type='submit'
      color='primary'
      variant='contained'
      disableElevation
    >
      {text}
    </LargeButton>
  );
}

export function LinkButton({ texto, path }: LinkButtonProps) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <SmallButton color='primary' variant='contained'>
        {texto}
      </SmallButton>
    </Link>
  );
}
