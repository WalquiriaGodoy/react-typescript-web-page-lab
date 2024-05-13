import { Carousel } from './Carousel';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Carousel', () => {
  it('should render component', () => {
    render(
      <Carousel>
        <></>
      </Carousel>
    );
    const carousel = screen.getByRole('carousel');
    expect(carousel).toBeInTheDocument();
  });
  it('should render carousel butons', () => {
    render(
      <Carousel>
        <></>
      </Carousel>
    );
    const carouselButtons = screen.getAllByRole('carousel-button');
    expect(carouselButtons).toHaveLength(2);
  });

  it('should scroll right when button right is clicked', () => {
    render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Carousel>
    );

    const carousel = screen.getByRole('carousel');
    const initialScrollLeft = carousel.scrollLeft;

    const carouselButtons = screen.getAllByRole('carousel-button');
    const carouselButtonRight = carouselButtons[1];

    fireEvent.click(carouselButtonRight);
    expect(carousel.scrollLeft).toBe(initialScrollLeft + 150);
  });
  it('should scroll left when button left is clicked', () => {
    render(
      <Carousel>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Carousel>
    );

    const carousel = screen.getByRole('carousel');
    const initialScrollLeft = carousel.scrollLeft;

    const carouselButtons = screen.getAllByRole('carousel-button');
    const carouselButtonLeft = carouselButtons[0];

    fireEvent.click(carouselButtonLeft);
    expect(carousel.scrollLeft).toBe(initialScrollLeft - 150);
  });
});
