import React from 'react';
import salaolab from '../../assets/img/salaolab.jpeg';
import './sobre.scss';

class Sobre extends React.Component {
  render() {
    return (
      <div className='principal'>
        <h1 className='titulo-principal'>
          Sobre o Laboratório de Forró da Wal
        </h1>
        <img
          className='img-sobre'
          src={salaolab}
          alt='Imagem da sala de aula com alunos em circulo'
        />
        <p className='paragrafo'>
          Localizado em São Paulo, na região do Butantã, o Laboratório de Forró
          traz para o mercado da dança de salão, os cursos de Forró e Samba de
          Gafieira sob uma perspectiva social, cultural e técnica voltada para a
          consciência corporal e promoção de saúde física e mental.
        </p>
        <p className='paragrafo'>
          Fundado em 2019, o Laboratório de Forró, hoje, oferece cursos de
          outros ritmos, aulas particulares e treinamento físico voltado
          principalmente para a dança.
        </p>
        <p className='sub-titulo'>Professora Walks:</p>
        <p className='paragrafo'>
          Nossas aulas de dança são ministradas pela professora Walquiria Godoy.
          Formada inicialmente no curso de Licenciatura em Física, nossa
          professora passou pela Faculdade de Educação e de Filosofia da
          Universidade de São Paulo e, no âmbito da dança de salão, a qual
          pratica há 12 anos, foi aluna do Pé Descalço de São Paulo e da
          Gafieira da Ladeira. A professora segue seus estudos na dança de
          salão, fez parte da Cia Vanessa Jardim Dança e é graduanda do curso de
          Educação Física da Escola de Educação Física e Esportes da USP. Ela
          acredita que sua vivência multidisciplinar na universidade e na dança
          de salão foram fundamentais para constituir uma visão completa e
          diferenciada da dança e do ensino de dança, que se reflete diretamente
          no objetivo, conteúdo e metodologia presentes em suas aulas de Forró e
          Samba.
        </p>
      </div>
    );
  }
}

export default Sobre;
