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
  margin-left: 2em;
  margin-right: 2em;
  gap: 4rem;
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

export const ListaDeCursosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefefe;
  padding: 2rem 12rem;
  gap: 4rem;

  p {
    text-align: justify;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const DescriptionStyle = styled.div`
  font-family: 'Roboto';
  flex: 1;

  h1 {
    text-align: center;
    font-size: 2.5rem;
    text-shadow: 1px 1px 0px #fff, 3px 3px 0px rgba(0, 0, 0, 0.15);
  }
  h2 {
    margin-bottom: 0;
    text-align: start;
  }

  p {
    margin: 0;
  }
`;

export const OfferInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
