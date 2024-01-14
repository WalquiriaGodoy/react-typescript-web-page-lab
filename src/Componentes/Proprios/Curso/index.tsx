import React from 'react';
import * as S from './styles';
import { coursesList } from '../../Courses/CoursesList';
import { CourseCard } from '../../CourseCard/CourseCard';

interface CursoProps {}

export const Curso: React.FC<CursoProps> = () => {
  return (
    <>
      {coursesList.map((course) => {
        return (
          <S.CursoContainter key={course.name}>
            <>TITULO</>
            <S.ImageContainer>
              <CourseCard
                key={'Curso' + course.name}
                children={course.children}
              />
            </S.ImageContainer>
          </S.CursoContainter>
        );
      })}{' '}
    </>
  );
};
