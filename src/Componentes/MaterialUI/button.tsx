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
  borderRadius: '10px',
}) as typeof Button;

type BotaoProps = {
  texto: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function FormButton({ texto, handleClick }: BotaoProps) {
  return (
    <LargeButton
      variant='contained'
      onClick={handleClick}
      className='botao'
      disableElevation
    >
      {texto}
    </LargeButton>
  );
}

type LinkButtonProps = {
  texto: string;
  path: string;
};

export function LinkButton({ texto, path }: LinkButtonProps) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <SmallButton variant='contained'>{texto}</SmallButton>
    </Link>
  );
}
