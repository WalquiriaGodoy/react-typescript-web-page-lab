import React from 'react';
import Header from '../../Componentes/Header';
import Rodape from '../../Componentes/Rodape';
import { ListaDeCursos } from '../../Componentes/ListaDeCursos';
import './Cursos.scss';

class Cursos extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Header />
        <ListaDeCursos />
        <Rodape />
      </section>
    );
  }
}

export default Cursos;
