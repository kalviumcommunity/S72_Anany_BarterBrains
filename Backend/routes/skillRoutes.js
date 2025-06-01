import express from 'express';
import { getAllSkills, addSkill, updateSkill } from '../controllers/skillController.js';

const router = express.Router();

router.get('/', getAllSkills);
router.post('/', addSkill);
router.put('/:id', updateSkill); 

export default router;
