import Cabecalho from './../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import FormDadosPessoais from '../Componentes/Formulário/DadosPessoais/formDadosPessoais';
import FormEndereco from '../Componentes/Formulário/FormEndereco/formEndereco';
import { useState } from 'react';

function Cadastro() {
  const [form, setForm] = useState('0');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('handleClick');
    console.log('botão clicado');
  };

  return (
    <section className='conteudo'>
      <Cabecalho />
      <FormDadosPessoais submitText='próximo' handleClick={handleClick} />
      <FormEndereco submitText='cadastrar' handleClick={handleClick} />
      <Rodape />
    </section>
  );
}

export default Cadastro;
