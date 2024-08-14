import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaCloud, FaLock, FaSync, FaRocket } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

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

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #cb0d3f;
  text-align: center;
  animation: ${slideIn} 1s ease-out;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #cccccc;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  animation: ${slideIn} 1s ease-out 0.2s both;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const FeatureCard = styled.div`
  background-color: #1a1a1f;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${slideIn} 1s ease-out ${props => props.delay}s both;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #cb0d3f;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffffff;
`;

const FeatureDescription = styled.p`
  color: #cccccc;
`;

const CTASection = styled.section`
  text-align: center;
  margin-top: 80px;
  animation: ${fadeIn} 1s ease-out 1s both;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #cb0d3f;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(203, 13, 63, 0.5);
  }
`;

const CloudStoragePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Title>NIHON Cloud Storage</Title>
        <Subtitle>
          Experience the future of cloud storage with unparalleled security,
          speed, and reliability. Store, sync, and access your files from
          anywhere, anytime.
        </Subtitle>
        {isLoaded && (
          <>
            <FeaturesGrid>
              <FeatureCard delay={0.4}>
                <FeatureIcon><FaCloud /></FeatureIcon>
                <FeatureTitle>Unlimited Storage</FeatureTitle>
                <FeatureDescription>
                  Store all your files without worrying about space constraints.
                  Our cloud grows with your needs.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard delay={0.6}>
                <FeatureIcon><FaLock /></FeatureIcon>
                <FeatureTitle>Advanced Security</FeatureTitle>
                <FeatureDescription>
                  Your data is protected with state-of-the-art encryption and
                  multi-factor authentication.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard delay={0.8}>
                <FeatureIcon><FaSync /></FeatureIcon>
                <FeatureTitle>Seamless Sync</FeatureTitle>
                <FeatureDescription>
                  Keep your files up-to-date across all your devices with
                  real-time synchronization.
                </FeatureDescription>
              </FeatureCard>
              <FeatureCard delay={1.0}>
                <FeatureIcon><FaRocket /></FeatureIcon>
                <FeatureTitle>Lightning-Fast Access</FeatureTitle>
                <FeatureDescription>
                  Access your files instantly with our high-speed servers and
                  optimized content delivery network.
                </FeatureDescription>
              </FeatureCard>
            </FeaturesGrid>
          </>
        )}
      </MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default CloudStoragePage;