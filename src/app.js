import express from 'express';
import userRouter from './routers/userRoutes';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';


const app=express();
const PORT=3000;

app.use(bodyParser.json());


const connectionString='mongodb+srv://greentech:international@cluster0.9mata.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

MongoClient.connect(connectionString, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(()=>{
  console.log('database connected remotely')
})
.catch(err=>{
  console.log(err)
})



app.use('/api/v1/users',userRouter);

app.get('/',(req,res)=>{
   res.send('Welcome to GreenTech Website')
})


app.listen(PORT,()=>{
  console.log(`App Listening to ${PORT}`)
})