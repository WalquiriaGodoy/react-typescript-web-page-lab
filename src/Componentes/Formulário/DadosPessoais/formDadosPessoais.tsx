import { useEffect } from 'react';
import Botao from '../../Botao/botao';
import './formDadosPessoais.scss';

type FormProps = {
  id: number;
  form: number;
  submitText: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function FormDadosPessoais({ id, form, submitText, handleClick }: FormProps) {
  function verificarTipoDeFormulario(id: number, form: number) {
    if (id == form) {
      console.log('id igual ao form', id, form);
      return true;
    } else {
      console.log('id diferente de form', id, form);
      return false;
    }
  }

  function esconderFormulario(id: number) {
    console.log('esconder formulario:', id);
  }

  useEffect(() => {
    const abreFormulario = verificarTipoDeFormulario(id, form);
    if (!abreFormulario) {
      esconderFormulario(id);
    }
  }, [form]);

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
