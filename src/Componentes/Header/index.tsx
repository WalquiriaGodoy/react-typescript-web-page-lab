import React from 'react';
import { LinkButton } from '../MaterialUI/Buttons/button';
import * as S from './header.style';

import './header.scss';
import { BannerLab } from '../images/BannerLab';
import { useDevice } from 'src/hooks/useDevice';

const Header: React.FC = () => {
  const { isMobile } = useDevice();

  return (
    <header>
      <S.HeaderWrapper $isMobile={isMobile}>
        <S.HeaderTitle $isMobile={isMobile}>Laboratório de Forró</S.HeaderTitle>
        <ul className='lista-navegacao'>
          <li>
            <LinkButton texto='HOME' path='/' />
          </li>
          <li>
            <LinkButton texto='Cursos' path='/cursos' />
          </li>
        </ul>
      </S.HeaderWrapper>
      <S.BannerWrapper $isMobile={isMobile}>
        <BannerLab />
      </S.BannerWrapper>
    </header>
  );
};

export default Header;
