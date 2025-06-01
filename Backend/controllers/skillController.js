import { skills } from '../data/skills.js';

export const getAllSkills = (req, res) => {
  res.status(200).json(skills);
};
