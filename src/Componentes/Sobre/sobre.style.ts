import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  background: #fefefe;
  margin: 8rem;

  h1 {
    text-align: center;
    font-size: 2.5em;
    font-family: 'Roboto';
    margin: 0 0 1em;
    clear: left;
  }

  img {
    width: 100%;
    height: 100%;
    float: left;
  }

  p {
    text-align: justify;
    margin: 1.5em;
  }
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  font-family: 'Roboto';
  font-size: 2rem;

  p {
  }
`;
