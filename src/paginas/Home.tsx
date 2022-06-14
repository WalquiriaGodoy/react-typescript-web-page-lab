import React from 'react';
import Rodape from '../Componentes/Rodape';
import Cabecalho from './../Componentes/Cabecalho';

class Home extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <Rodape />
      </section>
    );
  }
}

export default Home;
