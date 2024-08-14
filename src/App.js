import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Status from './pages/Status/Status';
import CloudStorage from './pages/CloudStorage/CloudStorage';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status" element={<Status />} />
        <Route path="/cloud-storage" element={<CloudStorage />} />
      </Routes>
    </Router>
  );
}

export default App;