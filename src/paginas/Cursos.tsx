import React from 'react';
import Cabecalho from '../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';

class Cursos extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <Rodape />
      </section>
    );
  }
}

export default Cursos;
