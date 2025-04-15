import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Import images for Short Films
import img1 from '../assets/images/genesis/1.jpg';
import img2 from '../assets/images/genesis/2.jpg';
import img3 from '../assets/images/genesis/3.jpg';
import img4 from '../assets/images/genesis/4.jpg';
import img5 from '../assets/images/genesis/5.jpg';
import img6 from '../assets/images/genesis/6.jpg';
import img7 from '../assets/images/genesis/7.jpg';
import img8 from '../assets/images/genesis/8.jpg';
import img9 from '../assets/images/genesis/9.jpg';
import img10 from '../assets/images/genesis/10.jpg';
import img11 from '../assets/images/genesis/11.jpg';
import img12 from '../assets/images/genesis/12.jpg';
import img13 from '../assets/images/genesis/13.jpg';
import img14 from '../assets/images/genesis/14.jpg';
import img15 from '../assets/images/genesis/15.jpg';

// Import images for Feature Films
import da1 from '../assets/images/da/da1.jpg';
import da2 from '../assets/images/da/da2.jpg';
import da3 from '../assets/images/da/da3.jpg';
import da4 from '../assets/images/da/da4.jpg';
import da5 from '../assets/images/da/da5.jpg';
import da6 from '../assets/images/da/da6.jpg';
import da7 from '../assets/images/da/da7.jpg';
import da8 from '../assets/images/da/da8.jpg';
import da9 from '../assets/images/da/da9.jpg';
import da10 from '../assets/images/da/da10.jpg';
import da11 from '../assets/images/da/da11.jpg';
import da12 from '../assets/images/da/da12.jpg';
import da13 from '../assets/images/da/da13.jpg';
import da14 from '../assets/images/da/da14.jpg';
import da15 from '../assets/images/da/da15.jpg';
import da16 from '../assets/images/da/da16.jpg';
import da17 from '../assets/images/da/da17.jpg';
import da18 from '../assets/images/da/da18.jpg';
import da19 from '../assets/images/da/da19.jpg';
import da20 from '../assets/images/da/da20.jpg';
import da21 from '../assets/images/da/da21.jpg';

const shortFilmImages = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15,
];

const featureFilmImages = [
  da1, da2, da3, da4, da5, da6, da7,
  da8, da9, da10, da11, da12, da13,
  da14, da15, da16, da17, da18, da19,
  da20, da21,
];

// Styled Components
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
  animation: ${fadeIn} 0.25s ease-in-out;
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
  max-width: 65vw;
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

export default function Films() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeSet, setActiveSet] = useState([]);

  const openImage = (index, imageSet) => {
    setCurrentIndex(index);
    setActiveSet(imageSet);
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

  return (
    <PageWrapper>
      {/* Short Films */}
      <Section>
        <SmallTitle>Expressionism/Pyschological Horror</SmallTitle>
        <MainTitle>Genesis 2023</MainTitle>
        <Description>
        When Shiro finds himself isolated 
        in a desolate and decaying world, 
        he must make allies to try and survive the 
        harsh circumstances as his mind begins to unravel.
        </Description>
        <Grid>
          {shortFilmImages.map((img, index) => (
            <GridImage
              key={index}
              src={img}
              alt={`Short Film ${index + 1}`}
              onClick={() => openImage(index, shortFilmImages)}
            />
          ))}
        </Grid>
      </Section>

      {/* Feature Films */}
      <Section>
        <SmallTitle>Drama</SmallTitle>
        <MainTitle>Dear Adaline</MainTitle>
        <Description>
        A reboot with an entire new story. 
        George Clark, renowned detective of 
        Pawford has trouble tracking down a clever 
        thief but comes to an unlikely crossroads 
        once identities are finally revealed.
        </Description>
        <Grid>
          {featureFilmImages.map((img, index) => (
            <GridImage
              key={index}
              src={img}
              alt={`Feature Film ${index + 1}`}
              onClick={() => openImage(index, featureFilmImages)}
            />
          ))}
        </Grid>
      </Section>

      {/* Full Screen Image Overlay */}
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











