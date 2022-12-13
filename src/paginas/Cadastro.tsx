import Cabecalho from './../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import FormDadosPessoais from '../Componentes/Formulário/DadosPessoais/formDadosPessoais';
import FormEndereco from '../Componentes/Formulário/FormEndereco/formEndereco';
import { useEffect, useState } from 'react';

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
      <FormDadosPessoais
        id={0}
        form={form}
        submitText='próximo'
        handleClick={handleClick}
      />
      <FormEndereco
        id={1}
        form={form}
        submitText='cadastrar'
        handleClick={handleClick}
      />
      <Rodape />
    </section>
  );
}

export default Cadastro;
