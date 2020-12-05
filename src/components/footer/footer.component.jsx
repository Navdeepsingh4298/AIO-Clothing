import React from 'react';

// Styled component
import {
  FooterContainer,
  FooterContent
} from './footer.styles';

// To get current year
const year = new Date().getFullYear();

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      &copy; {year} <strong>AIO Clothing</strong>
    </FooterContent>
  </FooterContainer>
)

export default Footer;
