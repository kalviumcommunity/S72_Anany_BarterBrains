const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  learner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill: { type: mongoose.Schema.Types.ObjectId, ref: 'Skill' },
  scheduledTime: Date,
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' }
});

module.exports = mongoose.model('Session', sessionSchema);
