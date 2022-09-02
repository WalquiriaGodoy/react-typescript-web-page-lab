import Botao from '../../Botao/botao';
import './formDadosPessoais.scss';

type FormProps = {
  submitText: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function FormDadosPessoais({ submitText, handleClick }: FormProps) {
  return (
    <form className='formulario'>
      <div className='formulario-caixa'>
        <div className='formulario-item-caixa'>
          <label htmlFor='nome'>Nome</label>
          <input
            className='input'
            type='text'
            name='nome'
            id='nome'
            placeholder='primeiro nome'
            required
          />
        </div>

        <div className='formulario-item-caixa'>
          <Botao texto={submitText} handleClick={handleClick} />
        </div>
      </div>
    </form>
  );
}

export default FormDadosPessoais;
