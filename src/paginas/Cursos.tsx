import React from 'react';
import Cabecalho from '../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import { CoursesList } from '../Componentes/CoursesList';

class Cursos extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <CoursesList />
        <Rodape />
      </section>
    );
  }
}

export default Cursos;
