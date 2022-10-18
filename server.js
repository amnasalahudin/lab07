
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userModel from './model/schema.js';
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';

const app = express()
var router = express.Router();
const port = 3000
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(bodyParser.urlencoded({extended:true}));

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }catch(error){
        throw error;
    }
    
};

mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB");
})
mongoose.connection.on("disconnected",()=>{
    console.log("Disconnected from MongoDB");
})


app.get('/', (req, res) => {

    res.sendFile(__dirname+"/index.html");
   
   
  })

  app.get('/index.css', (request, responseC) => {
    responseC.sendFile(path.join(__dirname, "index.css"))
});

  app.post('/myaction', (req, res) => {
    var username=new userModel({name:req.body.name});
    username.save();
    res.send("<p>your name</p>" + req.body.name +" <p>has been successfully stored</p>");
    });
    

app.listen(port, () => {
    connect();
  console.log(`Example app listening on port ${port}`)
})



