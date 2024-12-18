const express = require('express');
const connectDB = require('./utils/database');
const cors = require('cors')

const authRoutes = require('./routes/authRoutes');
const artworkRoutes = require('./routes/artworkRoutes');

const app = express();


// connect to MongoDB


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