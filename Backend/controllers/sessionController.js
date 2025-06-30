import Session from '../models/Session.js';

// POST - create a session
export const createSession = async (req, res) => {
  try {
    const session = new Session(req.body);
    const saved = await session.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET - all sessions with populated mentor and learner
export const getSessions = async (req, res) => {
  try {
    const sessions = await Session.find()
      .populate('mentor', 'name email')
      .populate('learner', 'name email');
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
