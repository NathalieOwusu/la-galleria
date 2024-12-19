const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const artworkRoutes = require('./routes/artworkRoutes');
const run = require('./utils/database');

const app = express();


mongoose
  .connect('mongodb+srv://daisha:lagalleria@cluster61478.qdaebge.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster61478')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('MongoDB connection error:', err));


//Middleware
app.use(express.json());
app.use(cors());


//Routes
app.use('/api/auth', authRoutes);
app.use('/api/artworks', artworkRoutes);




//start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost: ${PORT}`);
})