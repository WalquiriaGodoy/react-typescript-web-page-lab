import React from 'react';
import * as S from './sobre.style';
import salaolab from '../../assets/img/jpegImages/salaolab.jpeg';
import { Carousel } from '../Carousel/Carousel';
import { CourseCard } from '../CourseCard/CourseCard';
import { coursesListDuplicated } from '../Courses/CoursesList';

class Sobre extends React.Component {
  render() {
    return (
      <S.MainContentWrapper>
        <h1 className='titulo-principal'>Sobre o Laboratório de Forró</h1>
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
            {coursesListDuplicated.map((course) => {
              return (
                <CourseCard
                  key={course.name}
                  name={course.name}
                  children={course.children}
                  textAlign={course.textAlign}
                  textTop={course.textTop}
                  textRigth={course.textRigth}
                />
              );
            })}
          </Carousel>
        </S.Courses>
      </S.MainContentWrapper>
    );
  }
}

export default Sobre;
