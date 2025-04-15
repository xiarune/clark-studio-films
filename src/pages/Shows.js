// src/pages/Shows.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import bj1 from '../assets/images/bj/bj1.jpg';
import bj2 from '../assets/images/bj/bj2.jpg';
import bj3 from '../assets/images/bj/bj3.jpg';
import bj4 from '../assets/images/bj/bj4.jpg';
import bj5 from '../assets/images/bj/bj5.jpg';
import bj6 from '../assets/images/bj/bj6.jpg';
import bj7 from '../assets/images/bj/bj7.jpg';
import bj8 from '../assets/images/bj/bj8.jpg';
import bj9 from '../assets/images/bj/bj9.jpg';
import bj10 from '../assets/images/bj/bj10.jpg';
import bj11 from '../assets/images/bj/bj11.jpg';
import bj12 from '../assets/images/bj/bj12.jpg';

import fc1 from '../assets/images/fc/fc1.jpg';
import fc2 from '../assets/images/fc/fc2.jpg';
import fc3 from '../assets/images/fc/fc3.jpg';
import fc4 from '../assets/images/fc/fc4.jpg';
import fc5 from '../assets/images/fc/fc5.jpg';
import fc6 from '../assets/images/fc/fc6.jpg';
import fc7 from '../assets/images/fc/fc7.jpg';
import fc8 from '../assets/images/fc/fc8.jpg';
import fc9 from '../assets/images/fc/fc9.jpg';
import fc10 from '../assets/images/fc/fc10.jpg';
import fc11 from '../assets/images/fc/fc11.jpg';
import fc12 from '../assets/images/fc/fc12.jpg';
import fc13 from '../assets/images/fc/fc13.jpg';
import fc14 from '../assets/images/fc/fc14.jpg';
import fc15 from '../assets/images/fc/fc15.jpg';

import shorts1 from '../assets/images/shorts/shorts1.jpg';
import shorts2 from '../assets/images/shorts/shorts2.jpg';
import shorts3 from '../assets/images/shorts/shorts3.jpg';
import shorts4 from '../assets/images/shorts/shorts4.jpg';
import shorts5 from '../assets/images/shorts/shorts5.jpg';

const bjImages = [bj1, bj2, bj3, bj4, bj5, bj6, bj7, bj8, bj9, bj10, bj11, bj12];
const fcImages = [fc1, fc2, fc3, fc4, fc5, fc6, fc7, fc8, fc9, fc10, fc11, fc12, fc13, fc14, fc15];
const shortsImages = [shorts1, shorts2, shorts3, shorts4, shorts5];

const PageWrapper = styled.div`
  background-color: black;
  color: white;
  font-family: 'Georgia', serif;
`;

const Section = styled.section`
  padding: 5rem 2rem;
  text-align: center;
`;

const SmallTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 0.5rem;
`;

const MainTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  font-size: 1rem;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  justify-items: center;
`;

const GridImage = styled.img`
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const Overlay = styled.div`
  animation: ${fadeIn} 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const FullImage = styled.img`
  max-width: 70vw;
  max-height: 70vh;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: white;
  cursor: pointer;
  padding: 0 1rem;
  user-select: none;

  &.left {
    left: 2rem;
  }

  &.right {
    right: 2rem;
  }
`;

export default function Shows() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeSet, setActiveSet] = useState([]);

  const openImage = (set, index) => {
    setActiveSet(set);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
    setActiveSet([]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? activeSet.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === activeSet.length - 1 ? 0 : prev + 1
    );
  };

  const renderGrid = (images) =>
    images.map((img, i) => (
      <GridImage
        key={i}
        src={img}
        alt={`Show ${i + 1}`}
        onClick={() => openImage(images, i)}
      />
    ));

  return (
    <PageWrapper>
      <Section>
        <SmallTitle>Drama/Sci-Fi</SmallTitle>
        <MainTitle>My Blue Juliet</MainTitle>
        <Description>
        A group of friends navigates their 
        complicated relationships with one 
        another coupled with the overarching 
        threat of their own society.
        </Description>
        <Grid>{renderGrid(bjImages)}</Grid>
      </Section>

      <Section>
        <SmallTitle>Fantasy</SmallTitle>
        <MainTitle>Finding Celestia</MainTitle>
        <Description>
        When a young ruler is put under a powerful spell,
         a chosen hero must travel to the capital to receive 
         the honor of pursuing the hunt for a cure.
        </Description>
        <Grid>{renderGrid(fcImages)}</Grid>
      </Section>

      <Section>
        <SmallTitle>Spin-Off</SmallTitle>
        <MainTitle>MBJ:Shorts</MainTitle>
        <Description>
        Dive deeper into the complex makeup of the MBJ universe and characters.
        </Description>
        <Grid>{renderGrid(shortsImages)}</Grid>
      </Section>

      {currentIndex !== null && (
        <Overlay onClick={closeImage}>
          <Arrow className="left" onClick={prevImage}>
            &#10094;
          </Arrow>
          <FullImage
            src={activeSet[currentIndex]}
            alt={`Full View`}
          />
          <Arrow className="right" onClick={nextImage}>
            &#10095;
          </Arrow>
        </Overlay>
      )}
    </PageWrapper>
  );
}






