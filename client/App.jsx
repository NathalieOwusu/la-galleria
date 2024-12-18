import React from 'react'
import Login from './pages/LoginIn';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const handleCardClick = (cardTitle) => {
    setSelectedCard(cardTitle);
  }
  return (
    <div>
      <Login />
    </div>
  )
}

export default App;