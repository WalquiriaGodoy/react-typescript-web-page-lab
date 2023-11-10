import React from 'react';
import Rodape from '../../Componentes/Rodape';
import Cabecalho from '../../Componentes/Cabecalho';
import Sobre from '../../Componentes/Sobre/sobre';
import * as S from './Home.styles';

class Home extends React.Component {
  render() {
    return (
      <S.MainContentWrapper>
        <Cabecalho />
        <Sobre />
        <Rodape />
      </S.MainContentWrapper>
    );
  }
}

export default Home;
