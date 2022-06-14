import React from 'react';
import Botao from '../Botao';
import './formulario.scss';

class Formulario extends React.Component {
  render() {
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
            <label htmlFor='sobrenome'>Sobrenome</label>
            <input
              className='input'
              type='text'
              name='sobrenome'
              id='sobrenome'
              placeholder='sobrenome'
              required
            />
          </div>

          <div className='formulario-item-caixa'>
            <label htmlFor='telefone'>Telefone</label>
            <input
              className='input'
              type='number'
              name='telefone'
              id='telefone'
              placeholder='(xx) xxxxx-xxxx'
              required
            />
          </div>

          <div className='formulario-item-caixa'>
            <label htmlFor='cpf'>CPF</label>
            <input
              className='input'
              type='number'
              name='cpf'
              id='cpf'
              placeholder='digite o cpf'
              required
            />
          </div>

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
            <label htmlFor='numero'>Número</label>
            <input
              className='input'
              type='text'
              name='numero'
              id='numero'
              placeholder='número da residencia'
              required
            />
          </div>

          <div className='formulario-item-caixa'>
            <Botao />
          </div>
        </div>
      </form>
    );
  }
}

export default Formulario;
