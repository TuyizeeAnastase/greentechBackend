import mongoose from 'mongoose';
import validator from 'validator';

const clientSchema=new mongoose.Schema({
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
    amount:{
        type:String,
        required:[true,'Please input amount']
    },
    adress:{
        type:String,
        required:[true,'Please provide an phone number'],
    },
});

const Client=mongoose.model('Client',clientSchema);

export default Client;
