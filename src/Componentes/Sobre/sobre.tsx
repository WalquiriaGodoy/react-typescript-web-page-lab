import React from 'react';
import * as S from './sobre.style';
import salaolab from '../../assets/img/salaolab.jpeg';

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
      </S.MainContentWrapper>
    );
  }
}

export default Sobre;
