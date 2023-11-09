import React from 'react';
import { LinkButton } from '../MaterialUI/Buttons/button';
import * as S from './header.style';

import './cabecalho.scss';

class Cabecalho extends React.Component {
  render() {
    return (
      <header>
        <S.HeaderWrapper>
          <S.HeaderTitle>Laboratório de Forró</S.HeaderTitle>
          <ul className='lista-navegacao'>
            <li>
              <LinkButton texto='HOME' path='/' />
            </li>
            <li>
              <LinkButton texto='Cadastro' path='/cadastro' />
            </li>
            <li>
              <LinkButton texto='Cursos' path='/cursos' />
            </li>
          </ul>
        </S.HeaderWrapper>
      </header>
    );
  }
}

export default Cabecalho;
