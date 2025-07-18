import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Types from './pages/Types';
import GenAI from './pages/GenAI';
import AGIASI from './pages/AGIASI';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router basename="/AIKnowledge">
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/types" element={<Types />} />
          <Route path="/genai" element={<GenAI />} />
          <Route path="/agi-asi" element={<AGIASI />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 