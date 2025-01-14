const mongoose = require('mongoose');

<<<<<<< HEAD
const artworkSchema = new mongoose.Schema({
=======

const ArtworkSchema = new mongoose.Schema({
>>>>>>> b29389f16179c72e2766feb465cae4b85201cab5
  title:{ type: String, required: true},
  image_id: { type: String },
  image_url: { type: String, required: true },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Artwork = mongoose.model('Artwork', ArtworkSchema);

module.exports = Artwork;