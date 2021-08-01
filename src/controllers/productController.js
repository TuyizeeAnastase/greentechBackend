import Product from '../models/productModel';

export const getProducts=async (req,res)=>{
    try{
        const products=await Product.find();
        res.status(200).json({
          status:'success',
          results:products.length,
          data:{
              products
          }
      })
    }catch(err){
       res.status(404).json({
           status:'fail',
           message:'Products does not exist'
       })
     }
    }

    export const createProduct=async (req,res)=>{
    try{
    const newProduct=await Product.create(req.body);
    res.status(201).json({
        data:{
            product:newProduct
        }
    })
}catch(err){
    res.status(405).json({
        status:'fail',
        message:`Unable to create an product:${err}`
    })
}
}

export const getProduct=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
          res.status(200).json({
              status:'success',
              data:{
                  Product:product,
              }
          })
      }
      catch(err){
          res.status(404).json({
              status:'fail',
              message:'Invalid id of an Product'
          })
      }
}

export const updateProduct=async(req,res)=>{
    try{
      const product=await Product.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
          runValidators:true
      });
        res.status(200).json({
            status:'success',
            data:{
                Product:product,
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:'fail',
            message:'Invalid id'
        })
    }
}
export const deleteProduct=async (req,res)=>{
    try{
        const product=await Product.findByIdAndDelete(req.params.id);
          res.status(204).json({
              status:'success',
              data:null,
          })
      }
      catch(err){
          res.status(400).json({
              status:'fail',
              message:'Invalid id'
          })
        }
    }