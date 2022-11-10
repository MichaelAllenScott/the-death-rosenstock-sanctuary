const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: String,
  bandAbbrv: String,
  year: Number,
  orderIndex: Number,
  ep: Boolean,
  songs: [{
    orderIndex: Number,
    name: String,
    youtubeUrl: String
  }],
});

module.exports.Album = mongoose.model('Album', albumSchema);