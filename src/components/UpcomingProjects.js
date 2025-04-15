
import React from 'react';
import styled from 'styled-components';
import poster3 from '../assets/images/Film 3.jpg';

const Section = styled.section`
  background-color: black;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  background-color: #111;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
`;

const Poster = styled.img`
  width: 260px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
`;

const TextBlock = styled.div`
  flex: 1;
  min-width: 250px;
  color: white;
`;

const Heading = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #5285f3;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Subheading = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Synopsis = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
`;

export default function UpcomingProjects() {
  return (
    <Section>
      <Container>
        <Poster src={poster3} alt="Film Poster" />
        <TextBlock>
          <Heading>Coming Soon</Heading>
          <Subheading>Film 3</Subheading>
          <strong>Synopsis:</strong>
          <Synopsis>
            A man travels through realities to escape his own.
          </Synopsis>
        </TextBlock>
      </Container>
    </Section>
  );
}
