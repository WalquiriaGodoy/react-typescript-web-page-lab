import React from 'react';
import Rodape from '../Componentes/Rodape';
import Cabecalho from './../Componentes/Cabecalho';
import Sobre from '../Componentes/Sobre/sobre';
class Home extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <Sobre />
        <Rodape />
      </section>
    );
  }
}

export default Home;
