import * as S from "./styles";

import { Curso } from "../Proprios/Curso";

import { coursesList } from "../Courses/CoursesList";

export const ListaDeCursos = () => {
  return (
    <S.ListaDeCursosContainer>
      {coursesList.map((Course, index) => (
        <Curso
          key={Course.name}
          name={Course.name}
          children={Course.children}
          description={Course.description}
          reverse={index % 2 !== 0}
        />
      ))}
    </S.ListaDeCursosContainer>
  );
};
