import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/images/background-home.jpg';
import poster1 from '../assets/images/Film 1.jpg';
import poster2 from '../assets/images/Film 2.jpg';
import poster3 from '../assets/images/Film 3.jpg';

const HeroContainer = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 700px;
  padding-left: 4rem;
`;

const Title = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const ScrollButton = styled.button`
  margin-top: 2rem;
  align-self: center;
  background-color: white;
  color: black;
  border: 2px solid white;
  padding: 0.6rem 1.8rem;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: white;
    border-color: white;
  }
`;

const Section = styled.section`
  background-color: black;
  color: white;
  min-height: 100vh;
  padding: 5rem 2rem;
  text-align: center;
  font-family: 'Georgia', serif;
`;

const PosterGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 3rem;
`;

const PosterWrapper = styled.a`
  position: relative;
  width: 200px;
  cursor: pointer;
  text-decoration: none;

  &:hover .overlay {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const PosterImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease;
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-family: 'Georgia', serif;
  font-size: 1rem;
  padding: 0.5rem;
  opacity: 0;
  transition: all 0.3s ease;
`;

const UpcomingSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: black;
  color: white;
  min-height: 100vh;
  align-items: center;
  padding: 3rem 2rem;
`;

const UpcomingImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const UpcomingText = styled.div`
  flex: 1;
  padding: 2rem;
  min-width: 300px;
`;

const ComingTitle = styled.h2`
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: white;
`;

const Synopsis = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;

  strong {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

export default function Home() {
  const scrollToSections = () => {
    const section = document.getElementById('home-sections');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroContainer>
        <Overlay />
        <Content>
          <Title>CLARK STUDIO FILMS</Title>
          <Paragraph>
            Classic storytelling in every frame. Dive into our featured films, shows, and more.
          </Paragraph>
          <ScrollButton onClick={scrollToSections}>Explore More!</ScrollButton>
        </Content>
      </HeroContainer>

      <div id="home-sections">
        <Section>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.2rem' }}>Featured Works</h2>
          <PosterGrid>
            <PosterWrapper href="/films">
              <PosterImg src={poster1} alt="Film 1 Poster" />
              <OverlayText className="overlay">Genesis</OverlayText>
            </PosterWrapper>
            <PosterWrapper href="/films">
              <PosterImg src={poster2} alt="Film 2 Poster" />
              <OverlayText className="overlay">Dear Adaline</OverlayText>
            </PosterWrapper>
          </PosterGrid>
        </Section>

        <UpcomingSection>
          <UpcomingImage src={poster3} alt="Upcoming Film 3 Poster" />
          <UpcomingText>
            <ComingTitle>Coming Soon<br />Film 3</ComingTitle>
            <Synopsis>
              <strong>Synopsis:</strong>
              A man travels through realities to escape his own.
            </Synopsis>
          </UpcomingText>
        </UpcomingSection>
      </div>
    </>
  );
}
















