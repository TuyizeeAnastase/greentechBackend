import Admin from '../models/adminModel';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {promisify} from 'util';

const signinToken=id=>{
  return jwt.sign({id},'jsonWebToken_Password_Webtoken_Secret',{
      expiresIn:'90d'
});
};

export const signUp=async(req,res)=>{
  try{
    const newAdmin=await Admin.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      passwordConfirm:req.body.passwordConfirm
    });
    const token=signinToken(newAdmin._id);

    res.status(201).json({
      status:'success',
      token,
      data:{
        admin:newAdmin
      }
    })
  }
  catch(err){
    res.status(404).json({
      status:'fail',
      message:`Unable to add admin:${err}`
    })
  }
}
export const login=async(req,res)=>{
  const {email,password}=req.body;

  if(!email || !password){
     return res.status(400).send({message:"Please input password or email"});
  }
   const admin=await Admin.findOne({email}).select('+password');          
 
   if(!admin || !(await admin.correctPassword(password,admin.password))){
       return res.status(400).send({message:"Password is invalid!"});
       };
 
 
//sending token
const token=signinToken(admin._id);
res.status(201).json({
 status:'success',
 message:'The email and password valid,Logged In',
 token,
})
}

