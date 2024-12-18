import React from 'react'
import Login from './pages/LoginIn';

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
    <div>
      <Login />
    </div>
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
  
  )
}

export default App;