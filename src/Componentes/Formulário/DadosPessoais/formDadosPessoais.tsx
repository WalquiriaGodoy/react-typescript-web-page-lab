import Botao from '../../Botao/botao';
import './formDadosPessoais.scss';

function FormDadosPessoais() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('handleClick');
    console.log('botão clicado');
  };

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
          <Botao texto='Próxima' handleClick={handleClick} />
        </div>
      </div>
    </form>
  );
}

export default FormDadosPessoais;
