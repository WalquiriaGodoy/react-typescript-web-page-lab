import Cabecalho from './../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import RegisterForm from './../Componentes/Formulário/Cadastro';
import { useState } from 'react';

function Cadastro() {
  const formularios = {
    0: 'dadosPessoais',
    1: 'endereço',
  };

  const [form, setForm] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert('handleClick');
    console.log('botão clicado');
    setForm(form + 1);
  };

  return (
    <section className='conteudo'>
      <Cabecalho />
      <RegisterForm />
      <Rodape />
    </section>
  );
}

export default Cadastro;
