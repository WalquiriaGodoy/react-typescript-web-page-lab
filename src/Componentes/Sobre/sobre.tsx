import React from 'react';
import * as S from './sobre.style';
import salaolab from '../../assets/img/jpegImages/salaolab.jpeg';
import { Carousel } from '../Carousel/Carousel';
import { IntroducaoAoForro } from '../../assets/images/IntroduçãoAoForro';
import { GirosTradicionais } from '../../assets/images/GirosTradicionais';
import { GirosDeCincoPisadas } from '../../assets/images//GirosDeCincoPisadas';
import { CaminhadasDoRoots } from '../../assets/images/CaminhadasDoRoots';
import { GirosDoRoots } from '../../assets/images/GirosDoRoots';
import { PushAndPullESacadas } from '../../assets/images/PushAndPullESacadas';
import { ArrastadasETrocadilhos } from '../../assets/images/ArrastadasETrocadilhos';

class Sobre extends React.Component {
  render() {
    return (
      <S.MainContentWrapper>
        <h1 className='titulo-principal'>
          Sobre o Laboratório de Forró da Wal
        </h1>
        <S.Text>
          <img
            className='img-sobre'
            src={salaolab}
            alt='Imagem da sala de aula com alunos em circulo'
          />
          <p className='paragrafo'>
            Localizado em São Paulo, na região do Butantã, o Laboratório de
            Forró traz para o mercado da dança de salão, os cursos de Forró e
            Samba de Gafieira sob uma perspectiva social, cultural e técnica
            voltada para a consciência corporal e promoção de saúde física e
            mental.
          </p>
        </S.Text>

        <h1 className='titulo-principal'>Cursos Oferecidos</h1>

        <S.Courses>
          <Carousel>
            <IntroducaoAoForro />
            <GirosTradicionais />
            <GirosDeCincoPisadas />
            <CaminhadasDoRoots />
            <GirosDoRoots />
            <PushAndPullESacadas />
            <ArrastadasETrocadilhos />
          </Carousel>
        </S.Courses>
      </S.MainContentWrapper>
    );
  }
}

export default Sobre;
