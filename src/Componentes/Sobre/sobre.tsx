import React from 'react';
import * as S from './sobre.style';
import labIntroduction from './../../assets/img/labIntroduction.jpg';
import muralTecnica from './../../assets/img/muralTecnica.png';
import { Carousel } from '../Carousel/Carousel';
import { CourseCard } from '../CourseCard/CourseCard';
import { coursesList } from '../Courses/CoursesList';
import { LeadInvite } from '../LeadInvite/LeadInvite';
import { LeadForm } from '../Formulário/LeadForm/LeadForm';
import { useDevice } from 'src/hooks/useDevice';

const Sobre = () => {
  const { isDesktop, isTablet } = useDevice();

  return (
    <S.MainContentWrapper $isDesktop={isDesktop} $isTablet={isTablet}>
      <S.SectionTitle $isDesktop={isDesktop}>
        Sobre o Laboratório de Forró
      </S.SectionTitle>
      <S.Content $isDesktop={isDesktop}>
        <S.ImageContainer>
          <img
            className='img-sobre'
            src={labIntroduction}
            alt='Imagem da sala de aula com alunos em circulo'
          />
        </S.ImageContainer>

        <S.Description>
          <p>
            O Laboratório de Forró é uma escola situada em São Paulo na região
            do Butantã, dedicada ao ensino e à prática do Forró, com ênfase no
            Estilo Roots. Nossa missão é proporcionar uma experiência de
            aprendizado que vai além da dança, explorando o Forró como uma
            manifestação cultural, social e técnica. Dessa forma, nossas aulas
            são cuidadosamente estruturadas para promover a consciência
            corporal, a conexão com o par e com a música.
          </p>
          <p>
            No Laboratório de Forró, acreditamos que a dança é uma poderosa
            ferramenta para o bem-estar físico e mental. Por isso, nosso ensino
            é orientado não só para a evolução técnica, mas também para a
            promoção da saúde. Através da conexão com o corpo e da interação
            social proporcionada pelo Forró, nossos alunos descobrem novas
            formas de se expressar, relaxar e encontrar equilíbrio.
          </p>
          <p>
            Venha fazer parte dessa jornada de descoberta e bem-estar no
            Laboratório de Forró! Aqui, o Forró é mais do que uma dança: é um
            caminho para o autoconhecimento e a saúde integral.
          </p>
        </S.Description>
      </S.Content>

      <S.SectionTitle $isDesktop={isDesktop}>
        Aulas com Foco Técnico
      </S.SectionTitle>
      <S.CulturalSection $isDesktop={isDesktop}>
        <S.Description>
          <p>
            Um dos grandes diferenciais do Laboratório de Forró é o foco na
            parte técnica. A metodologia e a didática são pensadas para que
            todos os alunos, independente do nível, consigam realizar os
            movimentos com qualidade e definição.
          </p>
          <p>
            Nas aulas, os passos são ensinados de forma simples, clara e
            organizada, sempre alinhados com o ritmo da música e em sintonia com
            o par, garantindo que a dança flua de maneira natural e prazerosa.
          </p>
          <p>
            Os professores têm como prioridade ajudar os alunos a entenderem bem
            a base técnica, para que cada um consiga evoluir de forma segura e
            confiante. O resultado é uma dança mais conectada, onde os
            movimentos seguem o ritmo da música e a energia do par, tornando a
            experiência ainda mais enriquecedora e divertida.
          </p>
        </S.Description>
        <S.CulturalSectionImage $isDesktop={isDesktop}>
          <img
            className='img-sobre'
            src={muralTecnica}
            alt='Imagem da sala de aula com alunos em circulo'
            style={{ width: `100%`, height: `100%`, objectFit: 'cover' }}
          />
        </S.CulturalSectionImage>
      </S.CulturalSection>

      <S.CoursesSection>
        <S.SectionTitle $isDesktop={isDesktop}>
          Cursos Oferecidos
        </S.SectionTitle>
        <S.Courses>
          <Carousel>
            {coursesList.map((course) => {
              return (
                <CourseCard
                  key={course.key}
                  name={course.name}
                  children={course.children}
                />
              );
            })}
          </Carousel>
        </S.Courses>
      </S.CoursesSection>

      <S.LeadSection $isDesktop={isDesktop}>
        <LeadInvite />
        <LeadForm />
      </S.LeadSection>
    </S.MainContentWrapper>
  );
};

export default Sobre;
