import { skills } from '../data/skills.js';

export const getAllSkills = (req, res) => {
  res.status(200).json(skills);
};

export const addSkill = (req, res) => {
  const { name, category, level } = req.body;

  if (!name || !category || !level) {
    return res.status(400).json({ message: 'Please provide name, category, and level' });
  }

  const newSkill = {
    id: skills.length + 1,
    name,
    category,
    level,
  };

  skills.push(newSkill);
  res.status(201).json(newSkill);
};