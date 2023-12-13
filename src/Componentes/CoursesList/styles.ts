import styled from 'styled-components';

export const ListaDeCursosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  gap: 20px;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
