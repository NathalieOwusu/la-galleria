import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import GalleryPage from './pages/GalleryPage';
import './index.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
