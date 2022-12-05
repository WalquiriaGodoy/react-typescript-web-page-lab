import './formEndereco.scss';
import { FormButton } from '../../MaterialUI/Buttons/button';

type FormProps = {
  id: number;
  form: number;
  submitText: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function FormEndereco({ submitText, handleClick }: FormProps) {
  return (
    <>
      <form className='formulario'>
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
          <FormButton texto={submitText} handleClick={handleClick} />
        </div>
      </form>
    </>
  );
}

export default FormEndereco;
