import styled, { css } from 'styled-components';

interface ContentProps {
  $isDesktop: boolean;
}

interface MainContentWrapperProps {
  $isDesktop: boolean;
  $isTablet: boolean;
}

interface CulturalSectionProps {
  $isDesktop: boolean;
}

interface CulturalSectiuImageProps {
  $isDesktop: boolean;
}

interface LeadSectionProps {
  $isDesktop: boolean;
}

interface SectionTitleProps {
  $isDesktop: boolean;
}

export const MainContentWrapper = styled.div<MainContentWrapperProps>`
  ${({ $isDesktop, $isTablet }) => {
    console.log({ $isDesktop });
    return css`
      background: #fefefe;
      margin: ${$isDesktop || $isTablet ? '2rem 12rem' : 'unset'};

      img {
        width: 100%;
        height: 100%;
        float: left;
      }

      p {
        text-align: justify;
        margin-left: 2rem;
        margin-right: 2rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        font-size: 1.4rem;
        line-height: 2rem;
      }
    `;
  }}
`;

export const Content = styled.div<ContentProps>`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ $isDesktop }) =>
    $isDesktop ? '1fr 2fr' : '1fr'};
`;

export const ImageContainer = styled.div`
  width: '600px';
  height: '460px';
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-family: 'Roboto';
`;

export const CulturalSection = styled.section<CulturalSectionProps>`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ $isDesktop }) =>
    $isDesktop ? '1.2fr 1fr' : '1fr'};
`;

export const CulturalSectionImage = styled.div<CulturalSectiuImageProps>`
  max-width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

export const SectionTitle = styled.h1<SectionTitleProps>`
  padding: ${({ $isDesktop }) => ($isDesktop ? '4rem' : '1rem')};
  text-align: center;
  font-size: 2.5em;
  font-family: 'Roboto';
  text-shadow: 1px 1px 0px #fff, 3px 3px 0px rgba(0, 0, 0, 0.15);
`;

export const CoursesSection = styled.section``;

export const Courses = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeadSection = styled.section<LeadSectionProps>`
  display: grid;
  grid-template-columns: ${({ $isDesktop }) =>
    $isDesktop ? `6fr 4fr` : `1fr`};
  align-items: center;
  padding: ${({ $isDesktop }) => ($isDesktop ? '5rem' : '0')};
`;
