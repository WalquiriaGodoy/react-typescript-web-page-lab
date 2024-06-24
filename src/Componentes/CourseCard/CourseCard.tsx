import { ReactNode } from "react";
import * as S from "./CourseCard.styles";

type CourseCardProps = {
  name?: string;
  children: ReactNode;
  textAlign?: string;
  textTop?: string;
  textRigth?: string;
};

export const CourseCard = (props: CourseCardProps) => {
  return (
    <S.CardWrapper>
      <S.Image>{props.children}</S.Image>
    </S.CardWrapper>
  );
};
