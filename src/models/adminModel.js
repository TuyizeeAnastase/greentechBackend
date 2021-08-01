import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please input adminname']
    },
    email:{
        type:String,
        required:[true,'Please provide an email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please provide valid emal']
    },
    photo:String,
    password:{
        type:String,
        required:[true,'Please provide a password'],
        minlength:8,
        select:false
    },
    passwordConfirm:{
        type:String,
        select:false,
        required:[true,'Please confirm password'],
        validate: {
            validator:function(el) {
                return el===this.password;
            },
            message:'Password are not the same'
        }
    }
});

adminSchema.pre('save',function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=bcrypt.hashSync(this.password,10);
    this.passwordConfirm=undefined;
    next();
});

adminSchema.methods.correctPassword=async function(candidateP,adminP){
    return await bcrypt.compareSync(candidateP,adminP);
};

const Admin=mongoose.model('admin',adminSchema);

export default Admin;
