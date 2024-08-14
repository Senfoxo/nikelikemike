import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch, FaGithub, FaSlack, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #0c0c0f;
  color: #ffffff;
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Sidebar = styled.nav`
  width: 300px;
  background-color: #1c1c24;
  padding: 20px;
  overflow-y: auto;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #cb0d3f;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #2c2c34;
  border-radius: 4px;
  padding: 8px 12px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  color: #ffffff;
  flex-grow: 1;
  margin-left: 8px;
  &::placeholder {
    color: #8c8c94;
  }
  &:focus {
    outline: none;
  }
`;

const NavItem = styled(Link)`
  display: block;
  padding: 8px 0;
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover, &.active {
    color: #cb0d3f;
  }
`;

const Content = styled.main`
  flex-grow: 1;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
`;

const ContentHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 40px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  font-size: 20px;
  a {
    color: #cccccc;
    transition: color 0.3s ease;
    &:hover {
      color: #cb0d3f;
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #cb0d3f;
`;

const Paragraph = styled(motion.p)`
  line-height: 1.6;
  margin-bottom: 16px;
  color: #cccccc;
`;

const TableOfContents = styled.div`
  position: fixed;
  right: 40px;
  top: 100px;
  width: 200px;
  background-color: #1c1c24;
  padding: 20px;
  border-radius: 8px;
`;

const TOCTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #cb0d3f;
`;

const TOCItem = styled.a`
  display: block;
  color: #cccccc;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.3s ease;
  &:hover {
    color: #cb0d3f;
  }
`;

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const NihonDocs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Implement search functionality here
  };

  return (
    <PageWrapper>
      <MainContent>
        <Sidebar>
          <Logo>Nihon Docs</Logo>
          <SearchBar>
            <FaSearch color="#8c8c94" />
            <SearchInput 
              placeholder="Search docs" 
              value={searchTerm}
              onChange={handleSearch}
            />
          </SearchBar>
          <NavItem to="/docs/introduction" activeClassName="active">Introduction</NavItem>
          <NavItem to="/docs/getting-started" activeClassName="active">Getting Started</NavItem>
          <NavItem to="/docs/features" activeClassName="active">Features</NavItem>
          <NavItem to="/docs/api-reference" activeClassName="active">API Reference</NavItem>
          <NavItem to="/docs/advanced-usage" activeClassName="active">Advanced Usage</NavItem>
          <NavItem to="/docs/troubleshooting" activeClassName="active">Troubleshooting</NavItem>
        </Sidebar>
        <Content>
          <ContentHeader>
            <SocialLinks>
              <a href="https://github.com/nihon" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://nihon.slack.com" target="_blank" rel="noopener noreferrer"><FaSlack /></a>
              <a href="https://twitter.com/nihon" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </SocialLinks>
          </ContentHeader>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 0.5 }}
          >
            <Title>Welcome to Nihon Docs</Title>
            <Paragraph>
              Nihon is a cutting-edge cloud storage and data management solution designed to provide unparalleled security and efficiency. This documentation will guide you through the features, setup process, and best practices for using Nihon.
            </Paragraph>
            <Paragraph>
              Whether you're a new user getting started with Nihon or an experienced developer looking to integrate Nihon into your workflow, you'll find comprehensive information and resources here to help you make the most of our platform.
            </Paragraph>
            <Title>Key Features</Title>
            <Paragraph>
              - Advanced Cloud Storage: Store and access your data from anywhere, anytime.
              - Unbreakable Security: State-of-the-art encryption and multi-factor authentication.
              - High Script Support: Built to handle complex scripting needs.
              - Seamless Integration: Easy to integrate with your existing tools and workflows.
            </Paragraph>
            <Paragraph>
              Explore the sidebar to dive deeper into specific topics and learn how to leverage the full power of Nihon for your projects.
            </Paragraph>
          </motion.div>
        </Content>
        <TableOfContents>
          <TOCTitle>On this page</TOCTitle>
          <TOCItem href="#welcome">Welcome to Nihon Docs</TOCItem>
          <TOCItem href="#key-features">Key Features</TOCItem>
        </TableOfContents>
      </MainContent>
    </PageWrapper>
  );
};

export default NihonDocs;