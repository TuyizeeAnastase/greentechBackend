import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema=new mongoose.Schema({
    name:{
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
    role:{
      type:String,
      required:[true,'Please input Role']
  },
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

userSchema.pre('save',function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=bcrypt.hashSync(this.password,10);
    this.passwordConfirm=undefined;
    next();
});

userSchema.methods.correctPassword=async function(candidateP,userP){
    return await bcrypt.compareSync(candidateP,userP);
};


const User=mongoose.model('User',userSchema);

export default User;