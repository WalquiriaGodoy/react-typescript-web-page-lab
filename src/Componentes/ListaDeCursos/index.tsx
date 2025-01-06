import * as S from './styles';
import { Curso } from '../Proprios/Curso';
import { coursesList } from '../Courses/CoursesList';
import { useDevice } from 'src/hooks/useDevice';

export const ListaDeCursos = () => {
  const { deviceType } = useDevice();

  return (
    <S.ListaDeCursosContainer $deviceType={deviceType}>
      {coursesList.map((Course, index) => {
        const available = Course.avaliable;
        if (!available) return null;
        return (
          <Curso
            key={Course.name}
            name={Course.name}
            children={Course.children}
            description={Course.description}
            dayOfWeek={Course.dayOfWeek}
            firstDayOfClass={Course.firstDayOfClass}
            avaliable={Course.avaliable}
            startTime={Course.startTime}
            endTime={Course.endTime}
            reverse={index % 2 !== 0}
          />
        );
      })}
    </S.ListaDeCursosContainer>
  );
};
