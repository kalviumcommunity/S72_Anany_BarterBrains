import { skills } from '../data/skills.js';

// GET Controller
export const getAllSkills = (req, res) => {
  res.status(200).json(skills);
};

// POST Controller
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

// PUT Controller
export const updateSkill = (req, res) => {
  const skillId = parseInt(req.params.id);
  const { name, category, level } = req.body;

  const skill = skills.find((s) => s.id === skillId);

  if (!skill) {
    return res.status(404).json({ message: 'Skill not found' });
  }

  if (name) skill.name = name;
  if (category) skill.category = category;
  if (level) skill.level = level;

  res.json({ message: 'Skill updated', skill });
};
  