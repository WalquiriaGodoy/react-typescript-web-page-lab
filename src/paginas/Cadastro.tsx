import React from 'react';
import Cabecalho from './../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import FormDadosPessoais from '../Componentes/Formulário/DadosPessoais/formDadosPessoais';

class Cadastro extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <FormDadosPessoais />
        <Rodape />
      </section>
    );
  }
}

export default Cadastro;
