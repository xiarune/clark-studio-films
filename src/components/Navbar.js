import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const Nav = styled.nav`
  background-color: black;
  padding: 3rem 2rem 1rem; /* top right/left bottom */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    color: #aaa;
  }
`;

const Subtext = styled.a`
  font-size: 0.75rem;
  color: #ccc;
  font-family: 'Inter', sans-serif;
  margin-left: 2.2rem;
  margin-top: 0.25rem;
  text-decoration: none;

  &:hover {
    color: #aaa;
    text-decoration: underline;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.25rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Georgia', serif;
  font-size: 1rem;

  &:hover {
    color: #aaa;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Left>
        <LogoRow>
          <LogoImg src={logo} alt="Logo" />
          <TitleLink to="/">Clark Studio Films</TitleLink>
        </LogoRow>
        <Subtext
          href="https://www.youtube.com/@lpssageofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out all content on our channel!
        </Subtext>
      </Left>
      <NavLinks>
        <StyledLink to="/films">Films</StyledLink>
        <StyledLink to="/shows">Shows</StyledLink>
        <StyledLink to="/misc">Misc. Projects</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact & Disclaimer</StyledLink>
      </NavLinks>
    </Nav>
  );
}





