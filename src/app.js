import express from 'express';
// import adminRouter from './routers/adminRoutes.js';
import productRouter from './routers/productRouters.js';
import clientRouter from './routers/clientRoutes.js';
import subscribers from './routers/subscribers.js';
import message from './routers/message.js';
import  welcome  from './routers/welcome.js';
import auth from './routers/authRoutes.js'
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';



const app=express();
const port=process.env.PORT || 5000


app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS,PATCH');
  next();
});


//const connectionString='mongodb://greentech:international@cluster0-shard-00-00.9mata.mongodb.net:27017,cluster0-shard-00-01.9mata.mongodb.net:27017,cluster0-shard-00-02.9mata.mongodb.net:27017/greentech?ssl=true&replicaSet=atlas-k2wb23-shard-0&authSource=admin&retryWrites=true&w=majority'

const connectionString='mongodb+srv://greentech:international@cluster0.9mata.mongodb.net/greentech?retryWrites=true&w=majority&ssl=true'
const string='mongodb://greentech:international@cluster0-shard-00-00.9mata.mongodb.net:27017,cluster0-shard-00-01.9mata.mongodb.net:27017,cluster0-shard-00-02.9mata.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-k2wb23-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
  console.log('database connected remotely')
})
.catch(err=>{
  console.log("connection error",err)
  process.exit()
})

// mongoose.connect('mongodb://127.0.0.1:27017/greentech',
// {
//     useNewUrlParser:true,
//     useFindAndModify:false,
//     useUnifiedTopology:true
// })
// .then(()=>{
    
//     console.log('database connected locally')
// })
// .catch(err=>{
//     console.log(err)
// })

app.use('/',welcome);
// app.use('/api/v1/admin',adminRouter);
app.use('/api/v1/users',clientRouter);
app.use('/api/v1/products',productRouter);
app.use('/api/v1/subscribers',subscribers);
app.use('/api/v1/message',message);
app.use('/api/v1/auth',auth);


app.use('*', function (req, res) { 
  res.status(404).send('Page Not Found');
});


//app.use('/',welcome)

app.listen(port,()=>{
  console.log(`App Listening to ${port}`)
})

