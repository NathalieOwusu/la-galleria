import React from 'react'
<<<<<<< HEAD
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
=======
import User from './User'

const App = () => {
  return (
    <div>Welcome to our React App! </div>
>>>>>>> 6914adac5c126aa6848c06154fecb65f5b93430e
  )
};

export default App;