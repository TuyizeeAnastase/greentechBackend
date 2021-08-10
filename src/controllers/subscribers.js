import Subscribers from '../models/subscribers.js';

export const addSub=async (req,res)=>{
    try{
        const newSub=await Subscribers.create(req.body);
        res.status(201).json({
            user:{
                subscriber:newSub
            }
        })
    }catch(err){
        res.status(405).json({
            status:'fail',
            message:err
        })
    }
}

export const getSub=async (req,res)=>{
    try{
        const subscribers=await Subscribers.find();
        res.status(200).json({
            status:'success',
            results:subscribers.length,
            users:{
                subscribers
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:'Subscribers does not exist'
        })
    }
}