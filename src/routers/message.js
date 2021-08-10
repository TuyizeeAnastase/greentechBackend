import express from 'express';
import { getMessage,addMessage } from '../controllers/message';


const router=express.Router();

router
  .route('/')
  .get(getMessage)

router
  .route('/new')
  .post(addMessage)

export default router;