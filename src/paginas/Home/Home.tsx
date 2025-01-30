import React from 'react';
import Rodape from '../../Componentes/Rodape';
import Header from '../../Componentes/Header';
import Sobre from '../../Componentes/Sobre/sobre';
import * as S from './Home.styles';

class Home extends React.Component {
  render() {
    return (
      <S.MainContentWrapper>
        <Header />
        <Sobre />
        <Rodape />
      </S.MainContentWrapper>
    );
  }
}

export default Home;
