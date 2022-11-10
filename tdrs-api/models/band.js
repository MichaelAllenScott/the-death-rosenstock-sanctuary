const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema({
  name: String,
  bandAbbrv: String,
  orderIndex: Number,
  bandMembers: [String],
});

module.exports.Band = mongoose.model('Band', bandSchema);