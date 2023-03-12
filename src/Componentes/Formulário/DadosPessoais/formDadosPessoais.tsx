import './formDadosPessoais.scss';

function FormDadosPessoais() {
  return (
    <>
      <div className='formulario-item-caixa'>
        <label htmlFor='name'>Nome</label>
        <input className='input' type='text' name='name' id='name' required />
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='phone'>Telefone</label>
        <input
          className='input'
          type='number'
          name='phone'
          id='telephone'
          required
        />
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='name'>Data de Nascimento</label>
        <input
          className='input'
          type='date'
          name='birthDate'
          id='date'
          required
        />
      </div>
    </>
  );
}

export default FormDadosPessoais;
