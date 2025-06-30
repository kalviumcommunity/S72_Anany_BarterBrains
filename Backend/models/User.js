const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  role: { type: String, enum: ['mentor', 'learner'], default: 'learner' },
  bio: String
});

module.exports = mongoose.model('User', userSchema);
