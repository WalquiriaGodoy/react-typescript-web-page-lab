import { ReactNode } from 'react';
import * as S from './CourseCard.styles';
import { useDevice } from 'src/hooks/useDevice';

type CourseCardProps = {
  name?: string;
  children: ReactNode;
  textAlign?: string;
  textTop?: string;
  textRigth?: string;
};

export const CourseCard = (props: CourseCardProps) => {
  const { isMobile } = useDevice();

  return (
    <S.CardWrapper>
      <S.Image $isMobile={isMobile}>{props.children}</S.Image>
    </S.CardWrapper>
  );
};
