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
          <S.CursoContainter>
            <>TITULO</>
            <S.ImageContainer>
              <CourseCard key={course.name} children={course.children} />
            </S.ImageContainer>
          </S.CursoContainter>
        );
      })}{' '}
    </>
  );
};
