import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-family: 'Roboto';
  text-align: center;
  font-size: 2rem;
  width: 50%;
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  overflow-y: hidden;

  img {
    width: 100%;
    height: fit-content;
  }
`;
