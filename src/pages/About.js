// src/pages/About.js
import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: black;
  color: white;
  font-family: 'Georgia', serif;
  min-height: 100vh;
  padding: 3rem 2rem 4rem; /* reduced top padding */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* align content to top instead of center */
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  margin-top: 3rem; /* optional fine-tuning */
`;

const SmallTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #ddd;
`;

export default function About() {
  return (
    <PageWrapper>
      <Content>
        <SmallTitle>ABOUT CLARK STUDIO FILMS</SmallTitle>
        <MainTitle>Sage Clark 
            <br></br>Digital Media B.A. at University of Central Florida<br></br>
            Orlando, Florida</MainTitle>
        <Paragraph>
        Art should move an individual and that is exactly 
        what our productions strive to do. Through delicate 
        compositions of sound design, music, shot composition, 
        voice acting, and color grading we produce projects that are 
        designed to evoke a feeling. <br></br> Most productions here are improv / unscripted with 
        the exception of specific key scenes. For these a vague outline 
        will be drawn out with key dialogue points, shot compositions and color grading notes.
           
        </Paragraph>
      </Content>
    </PageWrapper>
  );
}


