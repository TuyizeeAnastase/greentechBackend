import mongoose from 'mongoose';
import validator from 'validator';

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please input adminname']
    },
    username:{
        type:String,
        required:[true,'Please input username']
    },
    email:{
        type:String,
        required:[true,'Please provide an email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please provide valid emal']
    },
    photo:String,
    phone:{
        type:String,
        required:[true,'Please provide an phone number'],
    },
    serialNumber:{
        type:String,
        required:[true,'Please provide an serial number'],
    },
    adress:{
        type:String,
        required:[true,'Please provide an phone number'],
    },
});

const User=mongoose.model('user',userSchema);

export default User;
