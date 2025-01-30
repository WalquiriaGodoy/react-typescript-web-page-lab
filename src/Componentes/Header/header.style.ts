import styled from 'styled-components';

interface BannerWrapperProps {
  $isMobile: boolean;
}

interface HeaderWrapperProps {
  $isMobile: boolean;
}

interface HeaderTitleProps {
  $isMobile: boolean;
}

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`;

export const HeaderTitle = styled.div<HeaderTitleProps>`
  font-family: 'Roboto';
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '35%')};
`;

export const BannerWrapper = styled.div<BannerWrapperProps>`
  width: 100%;
  height: ${({ $isMobile }) => ($isMobile ? 'unset' : '500px')};
  display: flex;
  overflow-y: hidden;

  img {
    width: 100%;
    height: fit-content;
  }
`;
