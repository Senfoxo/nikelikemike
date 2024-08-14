import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaServer, FaDatabase, FaCloud, FaGlobe } from 'react-icons/fa';

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
  font-size: 2rem;
  margin-bottom: 20px;
  color: #cb0d3f;
  text-align: center;
  animation: ${slideIn} 1s ease-out;
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
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  animation: ${slideIn} 1s ease-out 0.2s both;
  ${media.sm`
    font-size: 1.1rem;
  `}
  ${media.md`
    font-size: 1.2rem;
  `}
`;

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  ${media.md`
    grid-template-columns: repeat(2, 1fr);
  `}
`;

const StatusCard = styled.div`
  background-color: #1a1a1f;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${slideIn} 1s ease-out ${props => props.delay}s both;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DLLStatusCard = styled(StatusCard)`
  grid-column: 1 / -1;
  height: auto;
`;

const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const StatusDescription = styled.p`
  color: #cccccc;
  font-size: 0.9rem;
`;

const pulseAnimation = (color) => keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 ${color}66;
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px ${color}00;
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 ${color}00;
  }
`;

const StatusIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  position: absolute;
  top: 20px;
  right: 20px;
  animation: ${props => pulseAnimation(props.color)} 2s infinite;
`;

const DLLStatusIndicator = styled(StatusIndicator)`
  width: 50px;
  height: 50px;
  background-color: #ffc107;
  animation: ${props => pulseAnimation(props.color)} 2s infinite;
`;

const LegendWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  font-size: 0.8rem;
  padding: 10px;
  border-radius: 4px;
  animation: ${fadeIn} 1s ease-out 1.2s both;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LegendDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const DLLStatusContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Status = () => {
  const [dllStatus, setDllStatus] = useState("yellow");
  const [servicesStatus, setServicesStatus] = useState({
    'Cloud Storage': 'online',
    'Websites': 'online',
    'Database': 'online',
    'Servers': 'online'
  });
  
  const services = [
    { name: 'Cloud Storage', icon: FaCloud, url: 'https://nihon-cloud.dev' },
    { name: 'Websites', icon: FaGlobe, url: 'https://nihon.lol' },
    { name: 'Database', icon: FaDatabase },
    { name: 'Servers', icon: FaServer },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return '#4caf50';
      case 'maintenance': return '#ffc107';
      case 'offline': return '#f44336';
      default: return '#cccccc';
    }
  };

  const checkWebsiteStatus = async (url) => {
    try {
      const response = await fetch(url, { mode: 'no-cors' });
      return response.status === 0 || response.status === 200 ? 'online' : 'offline';
    } catch (error) {
      return 'offline';
    }
  };

  useEffect(() => {
    const checkServices = async () => {
      const updatedStatus = { ...servicesStatus };
      for (const service of services) {
        if (service.url) {
          updatedStatus[service.name] = await checkWebsiteStatus(service.url);
        }
      }
      setServicesStatus(updatedStatus);
    };

    checkServices();
    const interval = setInterval(checkServices, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Title>System Status</Title>
        <Subtitle>Check the current status of NIHON services</Subtitle>
        <StatusGrid>
          <DLLStatusCard delay={0.4}>
            <DLLStatusContent>
              <StatusInfo>
                <StatusTitle>DLL Update Status</StatusTitle>
                <StatusDescription>Current status of Nihon DLL</StatusDescription>
              </StatusInfo>
              <DLLStatusIndicator color="#ffc107" />
            </DLLStatusContent>
            <LegendWrapper>
              <LegendItem>
                <LegendDot color="#4caf50" />
                <span>Online</span>
              </LegendItem>
              <LegendItem>
                <LegendDot color="#ffc107" />
                <span>Maintenance</span>
              </LegendItem>
              <LegendItem>
                <LegendDot color="#f44336" />
                <span>Offline</span>
              </LegendItem>
            </LegendWrapper>
          </DLLStatusCard>
          {services.map((service, index) => (
            <StatusCard key={index} delay={0.6 + index * 0.2}>
              <StatusInfo>
                <StatusTitle>{service.name}</StatusTitle>
                <StatusDescription>
                  Status: {servicesStatus[service.name]}
                  {service.url && <div>URL: {service.url}</div>}
                </StatusDescription>
              </StatusInfo>
              <StatusIndicator 
                color={getStatusColor(servicesStatus[service.name])}
                pulse={true}
              />
            </StatusCard>
          ))}
        </StatusGrid>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default Status;