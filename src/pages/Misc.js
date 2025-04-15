// src/pages/Misc.js
import React from 'react';
import styled from 'styled-components';
import miscImage from '../assets/images/misc/misc.jpg';

const PageWrapper = styled.div`
  background-color: black;
  color: white;
  font-family: 'Georgia', serif;
  min-height: 100vh;
  padding: 3rem 2rem 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: center;
  max-width: 1200px;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  object-fit: cover;
  flex-shrink: 0;
`;

const Text = styled.div`
  flex: 1;
  min-width: 280px;
`;

const SmallTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.5rem;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const VideoButton = styled.a`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  color: black;
  background-color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
`;

export default function Misc() {
  return (
    <PageWrapper>
      <ContentWrapper>
        <Image src={miscImage} alt="Miscellaneous Project" />
        <Text>
          <SmallTitle>Stop Motion Animation</SmallTitle>
          <MainTitle>Morning Fish 2023</MainTitle>
          <Description>
            A fox makes some fish for breakfast while enjoying the Sunday paper. <br />
            Dean’s Award for Excellence 2023 <br />
            Excellence in Stop Motion 2023
          </Description>
          <VideoButton
            href="https://youtu.be/yKsEm43xkSY?si=PFsjPHZvODxUs5j0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube!
          </VideoButton>
        </Text>
      </ContentWrapper>
    </PageWrapper>
  );
}


