const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const artworkRoutes = require('./routes/artworkRoutes');

const app = express();

// Connect to the database 
mongoose
  .connect('mongodb+srv://daisha:lagalleria@cluster61478.qdaebge.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster61478')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('MongoDB connection error:', err));


//Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://la-galleria.netlify.app',  // Allow your frontend domain
}));


//Routes
app.use('/api/auth', authRoutes);
app.use('/api/artworks', artworkRoutes);

app.get('/api/data', (req, res) => {
  res.json({ data }); // Ensure you send a valid JSON response
});



//start server
const PORT = 8888;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})