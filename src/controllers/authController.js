import User from '../models/userModel';


export const signUp=async(req,res)=>{
  console.log(req.body);
  try{
    const newAdmin=await User.create({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      passwordConfirm:req.body.passwordConfirm
    });
    const token=signInToken(newAdmin._id);

    res.status(201).json({
      status:'success',
      token,
      data:{
        user:newUser
      }
    })
  }
  catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    })
  }
}
export const login=async(req,res)=>{
    res.send('login')
}

