import {promisify} from 'util';
import jwt from 'jsonwebtoken';
import User from '../models/Auth/User.js';

export const protect=async(req,res,next)=>{
    //checking token
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1];
    }
    if(!token){
        res.status(401).json({
            status:'fail',
            message:'Your are not logged in!Please log in to get access'
        });
        return;
    }
    let decoded;
    try{
        decoded=await promisify(jwt.verify)(token,'jsonWebToken_Password_Webtoken_Secret')
    }
    catch(err){
        res.status(401).json({
            status:'fail',
            message:'invalid token,log in to get one'
        })
    }
    const freshUser=await User.findById(decoded._id);
    if(!freshUser){
        res.status(401).json({
            status:'fail',
            message:'token is no long accepted'
        })
    }
    next();
}