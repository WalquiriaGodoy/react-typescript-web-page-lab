import styled from "styled-components";

interface CursoContainterProps {
  reverse: boolean;
}

export const CursoContainter = styled.div<CursoContainterProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 0 5rem;
`;

export const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  flex: 1;

  img {
    width: 100%;
  }
`;
