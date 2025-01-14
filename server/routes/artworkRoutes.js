const express = require('express');

const Artwork = require('../models/Artworks');

const router = express.Router();

// Fetch Artworks
router.get('/fetch', async (req, res) => {
  try {
    // Fetch data from the Art Institute API
    const response = await fetch('https://api.artic.edu/api/v1/artworks');
    const data = await response.json();

    if (response.ok) {
      // Extract artworks and construct IIIF URLs
      const iiifBaseUrl = data.config.iiif_url; // Corrected iiif_url
      const artworks = data.data.map((art) => ({
        title: art.title,
        image_id: art.image_id,
        image_url: `${iiifBaseUrl}/${art.image_id}/full/843,/0/default.jpg`,
      }));

      // Save artworks to the database
      const savedArtworks = [];
      for (const artwork of artworks) {
        const existingArtwork = await Artwork.findOne({ image_id: artwork.image_id });
        if (!existingArtwork) {
          const newArtwork = new Artwork(artwork);
          const savedArtwork = await newArtwork.save();
          savedArtworks.push(savedArtwork);
        }
      }

      // Respond with saved artworks
      return res.status(200).json({ message: 'Artworks fetched and saved', savedArtworks });
    } else {
      return res.status(500).json({ error: 'Failed to fetch artworks from the API' });
    }
  } catch (error) {
    // Handle errors
    return res.status(500).json({ error: 'Failed to fetch artworks' });
  }
});


router.post('/save', async (req, res) => {
  const { userId, title, image_id, image_url } = req.body;

  if (!userId || !title || !image_id || !image_url) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Check if the artwork already exists
    const existingArtwork = await Artwork.findOne({ image_id });
    if (existingArtwork) {
      return res.status(400).json({ error: 'Artwork already exists in the database' });
    }

    // Save artwork
    const artwork = new Artwork({ title, image_id, image_url, user: userId });
    await artwork.save();

    // Update user's gallery
    await User.findByIdAndUpdate(userId, { $push: { gallery: artwork._id } });

    return res.status(200).json({ message: 'Artwork saved to gallery', artwork });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to save artwork' });
  }
});



module.exports = router;








