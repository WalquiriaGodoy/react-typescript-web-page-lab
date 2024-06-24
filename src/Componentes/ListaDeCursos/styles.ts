import styled from "styled-components";

export const ListaDeCursosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionStyle = styled.div`
  font-size: 1.4rem;
  line-height: 2re;
  text-align: justify;
  font-weigth: 500;
  flex: 1;

  h1 {
    text-align: center;
    font-size: 2.5em;
    font-family: "Roboto";

    text-shadow: 1px 1px 0px #fff, 3px 3px 0px rgba(0, 0, 0, 0.15);
  }
`;
