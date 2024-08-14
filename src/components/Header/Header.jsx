import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: #0c0c0f;
  color: #ffffff;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Poppins', sans-serif;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const VerticalLine = styled.div`
  height: 30px;
  width: 1px;
  background-color: #ffffff;
  margin: 0 20px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  margin-right: auto;
  padding-left: 20px;
`;

const NavLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  position: relative;
  transition: color 0.3s ease;

  &:hover, &.active {
    color: #cb0d3f;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #cb0d3f;
    transition: width 0.3s ease;
  }

  &:hover::after, &.active::after {
    width: 100%;
  }
`;

const JoinUsButton = styled.a`
  background-color: #cb0d3f;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(203, 13, 63, 0.5);
  }
`;

const Header = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoContainer>
          <Logo src="/nihonbanner.png" alt="NIHON" />
          <VerticalLine />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/" className={activePage === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/status" className={activePage === '/status' ? 'active' : ''}>
            Status
          </NavLink>
          <NavLink to="/cloud-storage" className={activePage === '/cloud-storage' ? 'active' : ''}>
            Cloud Storage
          </NavLink>
        </NavLinks>
        <JoinUsButton href="https://discord.gg/3Syz24X2UD">Join Us Now</JoinUsButton>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;