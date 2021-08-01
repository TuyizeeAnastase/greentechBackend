import express from 'express';
import adminRouter from './routers/adminRoutes';
import productRouter from './routers/productRouters';
import userRouter from './routers/useRoutes';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';


const app=express();
const PORT=5000;

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


//const connectionString='mongodb://greentech:international@cluster0-shard-00-00.9mata.mongodb.net:27017,cluster0-shard-00-01.9mata.mongodb.net:27017,cluster0-shard-00-02.9mata.mongodb.net:27017/greentech?ssl=true&replicaSet=atlas-k2wb23-shard-0&authSource=admin&retryWrites=true&w=majority'

const connectionString='mongodb+srv://greentech:international@cluster0.9mata.mongodb.net/greentech?retryWrites=true&w=majority'

// MongoClient.connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(()=>{
//   console.log('database connected remotely')
// })
// .catch(err=>{
//   console.log(err)
// })

mongoose.connect('mongodb://127.0.0.1:27017/greentech',
{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(()=>{
    
    console.log('database connected locally')
})
.catch(err=>{
    console.log(err)
})


app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/products',productRouter);

app.use('*', function (req, res) { 
  res.status(404).send('Page Not Found');
});


app.get('/',(req,res)=>{
   res.send('Welcome to GreenTech Website')
})


app.listen(PORT,()=>{
  console.log(`App Listening to ${PORT}`)
})