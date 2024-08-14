import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaCloud, FaLock, FaSync } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const breakpoints = {
  xs: '320px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px'
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const PageWrapper = styled.div`
  background-color: #0c0c0f;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 40px;
  ${media.md`
    margin-bottom: 60px;
  `}
  ${media.lg`
    margin-bottom: 80px;
  `}
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #cb0d3f;
  ${media.sm`
    font-size: 2.5rem;
  `}
  ${media.md`
    font-size: 3rem;
  `}
  ${media.lg`
    font-size: 3.5rem;
  `}
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
  color: #cccccc;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  ${media.sm`
    font-size: 1.1rem;
  `}
  ${media.md`
    font-size: 1.2rem;
  `}
`;

const Button = styled(Link)`
  display: inline-block;
  background-color: ${props => props.secondary ? '#333333' : '#cb0d3f'};
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 0 10px;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${props => props.secondary ? 'rgba(51, 51, 51, 0.5)' : 'rgba(203, 13, 63, 0.5)'};
  }
  ${media.sm`
    padding: 12px 24px;
    font-size: 16px;
  `}
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 40px;
  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
  `}
`;

const CardBase = css`
  color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease;
  height: 150px;

  &:hover {
    transform: scale(1.02);
  }

  ${media.md`
    height: 180px;
  `}
`;

const FoundedCard = styled.div`
  ${CardBase}
  background-color: #cb0d3f;
`;

const DiscordCard = styled.div`
  ${CardBase}
  background-color: #5865F2;
`;

const ReleaseDateWrapper = styled.div`
  ${CardBase}
  background-color: #894fff;
  text-align: center;
  grid-column: 1 / -1;
  height: 100px;
  ${media.md`
    height: 120px;
  `}
`;

const InfoContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: left;
  align-items: flex-start;
  width: 100%;
`;

const InfoLabel = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  line-height: 1;
  ${media.sm`
    font-size: 2rem;
  `}
  ${media.md`
    font-size: 2.5rem;
  `}
`;

const InfoTitle = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  margin: 0.4rem 0;
  ${media.sm`
    font-size: 1rem;
  `}
`;

const InfoSubtitle = styled.p`
  font-size: 0.75rem;
  margin: 0;
  opacity: 0.8;
  ${media.sm`
    font-size: 0.875rem;
  `}
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  ${media.sm`
    grid-template-columns: repeat(2, 1fr);
    margin-top: 60px;
    margin-bottom: 60px;
  `}
  ${media.lg`
    grid-template-columns: repeat(3, 1fr);
    margin-top: 80px;
    margin-bottom: 80px;
  `}
`;

const FeatureCard = styled.div`
  background-color: #1a1a1f;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  ${media.sm`
    padding: 30px;
  `}
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #cb0d3f;
  margin-bottom: 20px;
  ${media.sm`
    font-size: 2.5rem;
  `}
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 15px;
  ${media.sm`
    font-size: 1.5rem;
  `}
`;

const FeatureDescription = styled.p`
  color: #cccccc;
`;

const AnimatedContent = styled.div`
  animation: ${slideIn} 1s ease-out;
`;

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        {isLoaded && (
          <AnimatedContent>
            <HeroSection>
              <Title>Welcome to NIHON</Title>
              <Subtitle>Where Imagination Meets Reality</Subtitle>
              <Button to="">Download</Button>
              <Button to="" secondary>Nihon Docs</Button>
            </HeroSection>
            <FeaturesSection>
              <FeatureCard>
                <FeatureIcon><FaCloud /></FeatureIcon>
                <FeatureTitle>Advanced Cloud Storage</FeatureTitle>
                <FeatureDescription>Store and access your data from anywhere, anytime with our cutting-edge cloud infrastructure.</FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><FaLock /></FeatureIcon>
                <FeatureTitle>Unbreakable Security</FeatureTitle>
                <FeatureDescription>Your data is protected with state-of-the-art encryption and multi-factor authentication.</FeatureDescription>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon><FaSync /></FeatureIcon>
                <FeatureTitle>High Script Support</FeatureTitle>
                <FeatureDescription>Nihon is built for High Script Support</FeatureDescription>
              </FeatureCard>
            </FeaturesSection>
            <InfoWrapper>
              <FoundedCard>
                <InfoContent>
                  <InfoLabel>NIHON</InfoLabel>
                  <InfoTitle>FOUNDED IN 2020</InfoTitle>
                  <InfoSubtitle>Built with passion and dedication</InfoSubtitle>
                </InfoContent>
              </FoundedCard>
              <DiscordCard>
                <InfoContent>
                  <InfoLabel>DISCORD</InfoLabel>
                  <InfoTitle>JOIN OUR COMMUNITY</InfoTitle>
                  <InfoSubtitle>Connect with fellow NIHON users</InfoSubtitle>
                </InfoContent>
              </DiscordCard>
              <ReleaseDateWrapper>
                <InfoLabel>Release Date</InfoLabel>
                <InfoSubtitle>Nihon is thinking...</InfoSubtitle>
              </ReleaseDateWrapper>
            </InfoWrapper>
          </AnimatedContent>
        )}
      </MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default Home;
