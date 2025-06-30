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
  const { name, category, level } = req.body;

  if (!name || !category || !level) {
    return res.status(400).json({ message: 'Please provide name, category, and level' });
  }

  try {
    const newSkill = new Skill({ name, category, level });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT update skill
export const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { name, category, level } = req.body;

  try {
    const skill = await Skill.findById(id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });

    if (name) skill.name = name;
    if (category) skill.category = category;
    if (level) skill.level = level;

    await skill.save();
    res.json({ message: 'Skill updated', skill });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
