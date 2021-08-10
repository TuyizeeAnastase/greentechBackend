import mongoose from 'mongoose';

const messageSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please provide an email'],
        lowercase:true,
    },
    subject:String,
    name:String,
    message:String,
    date:{
        type:Date,
        default:Date.now
    }
})

const Message=mongoose.model('Message',messageSchema)

export default Message;