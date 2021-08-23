import Client from '../models/clientModel.js';


export const createClient=async(req,res)=>{
  try{
    const newClient=await Client
    .create({
      name:req.body.name,
      username:req.body.username,
      phone:req.body.phone,
      serialNumber:req.body.serialNumber,
      adress:req.body.adress,
      amount:req.body.amount,
      email:req.body.email,
    });
    res.status(201).json({
      status:'success',
      data:{
        Client:newClient
      }
    })
  }
  catch(err){
    res.status(404).json({
      status:'fail',
      message:`Unable to add Client:${err}`
    })
  }
}

export const getAllClients=async(req,res)=>{
    try{
        const Clients=await Client.find();

        res.status(200).json({
            status:'succcess',
            results:Clients.length,
            data:{
               Clients
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

export const getClient=async (req,res)=>{
    try{
        const Client=await Client.findById(req.params.id);
          res.status(200).json({
              status:'success',
              data:{
                  Client:Client,
              }
          })
      }
      catch(err){
          res.status(404).json({
              status:'fail',
              message:'Invalid id of an Client'
          })
      }
}

export const updateClient=async(req,res)=>{
    try{
      const Client=await Client.findByIdAndUpdate(req.params.id,req.body,{
          new:true,
          runValidators:true
      });
        res.status(200).json({
            status:'success',
            data:{
                Client:Client,
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
export const deleteClient=async (req,res)=>{
    try{
        const Client=await Client.findByIdAndDelete(req.params.id);
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