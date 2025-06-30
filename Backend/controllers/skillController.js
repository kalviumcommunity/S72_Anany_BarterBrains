import Skill from '../models/Skill.js';

// GET all skills (READ)
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST add new skill (WRITE)
export const addSkill = async (req, res) => {
  const { name, category, description } = req.body;

  if (!name || !category || !description) {
    return res.status(400).json({ message: 'Please provide name, category, and description' });
  }

  try {
    const newSkill = new Skill({ name, category, description });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT update skill
export const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { name, category, description } = req.body;

  try {
    const skill = await Skill.findById(id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });

    if (name) skill.name = name;
    if (category) skill.category = category;
    if (description) skill.description = description;

    await skill.save();
    res.json({ message: 'Skill updated', skill });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
