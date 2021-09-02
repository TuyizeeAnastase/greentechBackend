import express from 'express';
import { protect } from '../middleware/loginprotect.js';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';

const router=express.Router();

router
  .route('/')
  .get(protect,getProducts)

router
  .route('/new')
  .post(createProduct)

router
  .route('/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)



export default router;