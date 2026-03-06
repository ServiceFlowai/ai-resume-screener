import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ResumeReview from './pages/ResumeReview';
import Feedback from './pages/Feedback';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/review" element={<ResumeReview />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
}

export default App;