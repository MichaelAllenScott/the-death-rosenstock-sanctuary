const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: String,
  bandAbbrv: String,
  description: String,
  year: Number,
  orderIndex: Number,
  explanation: String,
  moreInfo: String,
  ep: Boolean,
  songs: [{
    orderIndex: Number,
    name: String,
    lyrics: String,
    youtubeUrl: String,
    explanation: String,
    moreInfo: String,
  }],
});

module.exports.Album = mongoose.model('Album', albumSchema);