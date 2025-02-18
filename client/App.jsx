import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import GalleryPage from './pages/GalleryPage';
import './index.css';

import React from 'react'
import Login from './pages/LoginIn';
import Card from './components/GalleryCard';
import Modal from './components/Modal';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const [isModalOpen, setIsModalOpen] = usestate(false)
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  }
  const closeModal = () =>{
    setIsModalOpen(false);
    setSelectedCard(null);
  }
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
   <>
      <Login />
    
    <div className = 'container'>
    <Card title='Card 1' content='content for card 1' onClick= {() => handleCardClick('Card 1')} />
    <Card title='Card 2' content='content for card 2' onClick= {() => handleCardClick('Card 2')} />
    <Card title='Card 3' content='content for card 3' onClick= {() => handleCardClick('Card 3')} />
    <Card title='Card 4' content='content for card 4' onClick= {() => handleCardClick('Card 4')} />
    <Gallery />
    {isModalOpen && (
      <Modal 
    card = {selectedCard } 
    onClose={closeModal}
/>
    )}
     </div>
     </>
  
  )
}

export default App;
