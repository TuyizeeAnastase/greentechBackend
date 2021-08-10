import mongoose from 'mongoose';
import validator from 'validator';

const subscribersSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Please provide an email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please Provide valid email']
    }
});

const Subscribers=mongoose.model('Subscribers',subscribersSchema);

export default Subscribers; 