import User from '../models/userModel';


export const createUser=async(req,res)=>{
  try{
    const newuser=await User
    .create({
      name:req.body.name,
      username:req.body.username,
      phone:req.body.phone,
      serialNumber:req.body.serialNumber,
      adress:req.body.adress,
      email:req.body.email,
    });
    res.status(201).json({
      status:'success',
      data:{
        user:newuser
      }
    })
  }
  catch(err){
    res.status(404).json({
      status:'fail',
      message:`Unable to add user:${err}`
    })
  }
}

export const getAllUsers=async(req,res)=>{
    try{
        const users=await User.find();

        res.status(200).json({
            status:'succcess',
            results:users.length,
            data:{
               users
            }
        });
    }
    catch(err){
        res.status(500).json({
            status:'error',
            message:'This is router is not yet defined!'
        });
    }
}

export const getUser=async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
          res.status(200).json({
              status:'success',
              data:{
                  user:user,
              }
          })
      }
      catch(err){
          res.status(404).json({
              status:'fail',
              message:'Invalid id of an user'
          })
      }
}

export const updateuser=async(req,res)=>{
    try{
      const user=await User.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
          runValidators:true
      });
        res.status(200).json({
            status:'success',
            data:{
                user:user,
            }
        })
    }
    catch(err){
        res.status(404).json({
            status:'fail',
            message:'Invalid id'
        })
    } 
}
export const deleteuser=async (req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id);
          res.status(204).json({
              status:'success',
              data:null,
          })
      }
      catch(err){
          res.status(400).json({
              status:'fail',
              message:'Invalid id'
          })
        }
    }