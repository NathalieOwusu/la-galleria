const express = require('express');
const connectDB = require('./utils/database');
const app = express();

// connect to MongoDB
connectDB();

//Middleware
app.use(express.json());

// Test Route
app.get('/', (req, res)=>{
  res.send('MongoDB is connected!')
});

//start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})