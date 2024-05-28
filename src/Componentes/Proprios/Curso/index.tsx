import React from "react";
import * as S from "./styles";
import { coursesList } from "../../Courses/CoursesList";
import { CourseCard } from "../../CourseCard/CourseCard";
import { DescriptionStyle } from "src/Componentes/ListaDeCursos/styles";

interface CursoProps {
  name: string;
  children: React.ReactNode;
  description: string;
  reverse: boolean;
}

export const Curso: React.FC<CursoProps> = ({
  name,
  children,
  description,
  reverse,
}) => {
  return (
    <>
      <S.CursoContainter key={name} reverse={reverse}>
        <S.ImageContainer>
          <CourseCard children={children} />
        </S.ImageContainer>
        <DescriptionStyle>
          <h1>{name}</h1>
          <p>{description}</p>
        </DescriptionStyle>
      </S.CursoContainter>
    </>
  );
};
