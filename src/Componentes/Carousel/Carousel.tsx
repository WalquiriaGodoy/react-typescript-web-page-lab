import { useEffect, useRef } from 'react';
import * as S from './Carousel.styles';
import { CarouselProps } from './Carousel.types';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';
import { ChevronRight } from '../../assets/icons/ChevronRight';

export const Carousel = (props: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const handleButtonClick = (direction: 'left' | 'right') => {
    if (carouselRef.current && direction === 'right') {
      carouselRef.current.scrollLeft += 150;
    }
    if (carouselRef.current && direction === 'left') {
      carouselRef.current.scrollLeft -= 150;
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      if (
        carousel &&
        carousel.scrollLeft + carousel.clientWidth === carousel.scrollWidth
      ) {
        carousel.scrollLeft = 0;
      }
    };
    if (carousel) carousel.addEventListener('scroll', handleScroll);
    const intervalId = setInterval(() => {
      if (carousel) carousel.scrollLeft += 1;
    }, 20);

    return () => {
      carousel?.removeEventListener('scroll', handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <S.CarouselButton
        name='left'
        role='carousel-button'
        onClick={() => handleButtonClick('left')}
      >
        <ChevronLeft />
      </S.CarouselButton>
      <S.Wrapper $isMobile={props.isMobile} ref={carouselRef} role='carousel'>
        <S.Carousel>{props.children}</S.Carousel>
      </S.Wrapper>
      <S.CarouselButton
        name='right'
        role='carousel-button'
        onClick={() => handleButtonClick('right')}
      >
        <ChevronRight />
      </S.CarouselButton>
    </>
  );
};
