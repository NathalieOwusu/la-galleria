const express = require('express');
const connectDB = require('./utils/database');
const apiRouter = require('./routes/api');
const app = express();


// connect to MongoDB
connectDB();

//Middleware
app.use(express.json());

app.use('/api', apiRouter);

// Test Route
app.get('/Artworks', async (req, res)=>{
 try {
  const response = await fetch('https://api.artic.edu/api/v1/artworks?limit=5');
  const data = await response.json();

  if(response.ok) {
    const artwork = data.data.map((artwork)=> ({
      title: artwork.title,
      artist: artwork.artist,
      image_url: artwork.image_url,
      descriptions: artwork.description
    }))

    // respond with a sucessful message
    res.status(200).json({artwork});
  } 
} catch (error) {
    res.status(500).json({error: 'Error fetching data from Art institute of chicago'})
  }
 }
);

//route to retrieve artworks
app.get('/Artworks', async (req, res) => {
  try {
    const artworks = await artworks.find();
    res.status(200).json(artworks);
  } catch (error) {
    res.status(500).json({error: 'Error retrieving data from database'})
  }
})






//start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})