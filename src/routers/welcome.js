import { welcome } from '../controllers/welcome.js';
import express from 'express';

const router=express.Router();

router.get('/',welcome);

export default router;

