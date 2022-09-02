import React from 'react';
import Cabecalho from '../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import Contador from '../Componentes/Contador/contador';

class Cursos extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <Contador />
        <Rodape />
      </section>
    );
  }
}

export default Cursos;
