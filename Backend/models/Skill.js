const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String
});

module.exports = mongoose.model('Skill', skillSchema);
