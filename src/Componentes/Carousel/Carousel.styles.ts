import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 30px;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Carousel = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  min-width: max-content;
  gap: 2rem;
`;

export const CarouselButton = styled.button`
  cursor: pointer;
  width: 3rem;
  height: 11.5rem;
  height: 300px;
  border: none;
  background-color: white;
`;
