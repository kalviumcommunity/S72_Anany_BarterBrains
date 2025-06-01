import express from 'express';
import { getAllSkills, addSkill } from '../controllers/skillController.js';

const router = express.Router();

router.get('/', getAllSkills);
router.post('/', addSkill); 

export default router;
