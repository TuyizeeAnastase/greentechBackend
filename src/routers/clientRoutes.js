import express from 'express';

import { createClient, getAllClients, getClient, updateClient, deleteClient }  from '../controllers/clientController.js';


const router=express.Router();

router
  .route('/')
  .get(getAllClients)
 
router
  .route('/new')
  .post(createClient)  

router
  .route('/:id')
  .get(getClient)
  .patch(updateClient)
  .delete(deleteClient)  



export default router;