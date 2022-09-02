import './formDadosPessoais.scss';

function FormEndereco() {
  return (
    <>
      <div className='formulario-item-caixa'>
        <label htmlFor='cep'>CEP</label>
        <input
          className='input'
          type='number'
          name='cep'
          id='cep'
          placeholder='digite o cep'
          required
        />
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
        <Botao texto={'Cadastrar'} />
      </div>
    </>
  );
}

export default FormEndereco;
