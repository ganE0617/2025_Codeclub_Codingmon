import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import GameList from './pages/GameList';
import GamePlay from './pages/GamePlay';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: white;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/class/:classNumber" element={<GameList />} />
          <Route path="/class/:classNumber/:category" element={<GameList />} />
          <Route path="/awards" element={<GameList />} />
          <Route path="/play/:gameId" element={<GamePlay />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
