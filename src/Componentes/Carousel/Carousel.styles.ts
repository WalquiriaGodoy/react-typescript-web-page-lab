import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;
export const Carousel = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 300px;

  min-width: max-content;
  gap: 2rem;
  cursor: pointer;
  padding: 0 0.2rem 0 0;
`;
