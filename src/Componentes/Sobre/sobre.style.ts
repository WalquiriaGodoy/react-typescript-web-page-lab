import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  background: #fefefe;
  margin: 2rem 12rem;

  h1 {
    text-align: center;
    font-size: 2.5em;
    font-family: 'Roboto';
    margin: 0;
    clear: left;
  }

  img {
    width: 100%;
    height: 100%;
    float: left;
  }

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

export const Content = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-family: 'Roboto';
`;

export const CulturalSection = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 1fr;
`;

export const SectionTitle = styled.h1`
  padding: 4rem;
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

export const LeadSection = styled.section`
  display: grid;
  grid-template-columns: 6fr 4fr;
  align-items: center;
  padding: 5rem;
`;
