import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Status from './pages/Status/Status';
import CloudStorage from './pages/CloudStorage/CloudStorage';
import NihonDocs from './pages/NihonDocs/docs';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status" element={<Status />} />
        <Route path="/cloud-storage" element={<CloudStorage />} />
        <Route path="/docs" element={<NihonDocs />} />
      </Routes>
    </Router>
  );
}

export default App;