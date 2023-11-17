import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;
export const Carousel = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  min-width: max-content;
  gap: 2rem;
  cursor: pointer;
`;
