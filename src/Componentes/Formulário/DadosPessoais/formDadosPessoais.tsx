import './formDadosPessoais.scss';

function FormDadosPessoais() {
  return (
    <>
      <div className='formulario-item-caixa'>
        <label htmlFor='name'>Nome</label>
        <input className='input' type='text' name='name' id='name' required />
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='telephone'>Telefone</label>
        <input
          className='input'
          type='number'
          name='telephone'
          id='telephone'
          required
        />
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='name'>Data de Nascimento</label>
        <input className='input' type='date' name='date' id='date' required />
      </div>
    </>
  );
}

export default FormDadosPessoais;
