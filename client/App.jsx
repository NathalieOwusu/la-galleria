import React, { useState } from 'react'
import Gallery from './pages/Gallery'
import Card from './components/GalleryCard'
import './index.css'



const App = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  }
  return (
    <div>
    <Card title='Card 1' content='content for card 1' onClick= {() => handleCardClick('Card 1')} />
    <Card title='Card 2' content='content for card 2' onClick= {() => handleCardClick('Card 2')} />
    <Card title='Card 3' content='content for card 3' onClick= {() => handleCardClick('Card 3')} />
    <Card title='Card 4' content='content for card 4' onClick= {() => handleCardClick('Card 4')} />
    <Gallery />
    {selectedCard }
     </div>
  
  )
}

export default App;