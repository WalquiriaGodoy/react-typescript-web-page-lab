import styled from 'styled-components';

interface CursoContainterProps {
  reverse: boolean;
}

export const CursoContainter = styled.div<CursoContainterProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
`;

export const ImageContainer = styled.div`
  max-width: 450px;
  max-height: 450px;
  flex: 1;

  img {
    width: 100%;
    border-radius: 20px;
  }
`;
