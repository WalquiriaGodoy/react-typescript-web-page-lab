import './botao.scss';

type BotaoProps = {
  texto: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function Botao({ texto, handleClick }: BotaoProps) {
  return (
    <button onClick={handleClick} className='botao'>
      {texto}
    </button>
  );
}

export default Botao;
