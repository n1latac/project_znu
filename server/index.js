import http from 'http';
import app  from './app.js';
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config()

//Constants
const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

const server = http.createServer(app);

async function start(){
    try{
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.gsetepn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

        server.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        
        })
        
    }catch(err){
        console.log(err);
    }
}
start();


