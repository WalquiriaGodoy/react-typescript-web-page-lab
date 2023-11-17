import * as S from './Carousel.styles';
import { CarouselProps } from './Carousel.types';

export const Carousel = (props: CarouselProps) => {
  return (
    <S.Wrapper role='carousel'>
      <S.Carousel>{props.children}</S.Carousel>
    </S.Wrapper>
  );
};
