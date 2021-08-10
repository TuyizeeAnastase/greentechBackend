import express from 'express';
import { addSub,getSub } from '../controllers/subscribers';

const router=express.Router();

router
  .route('/')
  .get(getSub)

router
  .route('/new')
  .post(addSub)

export default router;