import './formEndereco.scss';

function FormEndereco() {
  return (
    <>
      <div className='formulario-item-caixa'>
        <label htmlFor='cep'>CEP</label>
        <input className='input' type='number' name='cep' id='cep' required />
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='endereco'>Endereço</label>
        <input
          className='input'
          type='text'
          name='endereco'
          id='endereco'
          required
        />
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='endereco'>Cidade</label>
        <input
          className='input'
          type='text'
          name='cidade'
          id='cidade'
          required
        />
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='endereco'>Estado</label>
        <input
          className='input'
          type='text'
          name='estado'
          id='estado'
          required
        />
      </div>
      <div className='formulario-item-caixa'>
        <label htmlFor='endereco'>Número</label>
        <input
          className='input'
          type='number'
          name='numero'
          id='numero'
          required
        />
      </div>
    </>
  );
}

export default FormEndereco;
