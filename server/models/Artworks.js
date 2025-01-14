const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema({
  title:{ type: String, required: true},
  artist: { type: String },
  image_url: { type: String },
  description: { type: String },
});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;