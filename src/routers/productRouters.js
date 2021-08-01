import express from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController';

const router=express.Router();

router
  .route('/')
  .get(getProducts)

router
  .route('/new')
  .post(createProduct)

router
  .route('/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct)



export default router;