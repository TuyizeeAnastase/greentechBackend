import express from 'express';

import { createUser, getAllUsers, getUser, updateuser, deleteuser }  from '../controllers/userController.js';


const router=express.Router();

router
  .route('/')
  .get(getAllUsers)
 
router
  .route('/new')
  .post(createUser)  

router
  .route('/:id')
  .get(getUser)
  .patch(updateuser)
  .delete(deleteuser)  



export default router;