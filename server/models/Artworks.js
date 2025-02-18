const mongoose = require('mongoose');


const ArtworkSchema = new mongoose.Schema({
  title:{ type: String, required: true},
  image_id: { type: String },
  image_url: { type: String, required: true },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Artwork = mongoose.model('Artwork', ArtworkSchema);

module.exports = Artwork;