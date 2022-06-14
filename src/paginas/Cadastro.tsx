import React from 'react';
import Cabecalho from './../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import Formulario from '../Componentes/Formulário';

class Cadastro extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <Formulario />
        <Rodape />
      </section>
    );
  }
}

export default Cadastro;
