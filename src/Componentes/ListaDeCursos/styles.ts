import styled from 'styled-components';

export const ListaDeCursosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fefefe;
  margin: 2rem 12rem;
  gap: 4rem;

  p {
    text-align: justify;
    margin-left: 2em;
    margin-right: 2em;
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
`;
