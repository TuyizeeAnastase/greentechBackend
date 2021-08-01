import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
    title:String,
    price:String,
    stock:String,
    status:String,
    date:{
        type:Date,
        default:Date.now
    }
})

const Product=mongoose.model('Product',productSchema);

export default Product;