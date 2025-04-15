import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: black;
  color: white;
  text-align: center;
  padding: 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Clark Studio. All rights reserved.
    </FooterWrapper>
  );
}
