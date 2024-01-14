import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  background: #fefefe;
  margin: 3rem 16rem;

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
    margin: 2em;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  font-family: 'Roboto';
  font-size: 2rem;
`;

export const SectionTitle = styled.h1`
  padding: 4rem;
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
