import React from 'react';
import Cabecalho from '../../Componentes/Cabecalho';
import Rodape from '../../Componentes/Rodape';
import { ListaDeCursos } from '../../Componentes/ListaDeCursos';
import './Cursos.scss';

class Cursos extends React.Component {
  render() {
    return (
      <section className='conteudo'>
        <Cabecalho />
        <ListaDeCursos />
        <Rodape />
      </section>
    );
  }
}

export default Cursos;
