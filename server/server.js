const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const artworkRoutes = require('./routes/artworkRoutes');
const api = require('./routes/services/api.js')
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
    origin: process.env.FRONTEND_URL || 'https://la-galleria.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));



//Routes
app.use('/api/auth', authRoutes);
app.use('/api/artworks', artworkRoutes);

app.get('/api/data', async (req, res) => {
  try {
    const data = await api.fetchData(); // Assuming api.fetchData() is an async function
    res.json({ data }); 
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});




//start server
const PORT = 8888;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})