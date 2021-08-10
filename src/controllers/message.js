import Message from '../models/message.js';

export const getMessage=async(req,res)=>{
    try{
        const message=await Message.find();
        res.status(200).json({
            status:'success',
            results:message.length,
            message:{
                message
            }
        })
    }catch(err){
        res.status(404).json({
            status:'fail',
            message:'No Message'
        })
    }
}

export const addMessage=async (req,res)=>{
    try{
        const newMessage=await Message.create(req.body);
        res.status(201).json({
            message:{
                message:newMessage
            }
        })
    }catch(err){
        res.status(405).json({
            status:'fail',
            message:err
        })
    }
}