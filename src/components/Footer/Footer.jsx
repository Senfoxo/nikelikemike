import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 350px;
    height: 1px;
    background-color: #333333;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      &copy; 2024 Vaclav (jisll). All rights reserved.
    </FooterWrapper>
  );
};

export default Footer;