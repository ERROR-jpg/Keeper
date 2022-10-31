const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const User = require('./models/user.model');


dotenv.config();

try{
     mongoose.connect(process.env.MONGO, {usenewUrlParser: true});
     console.log('Connected to MongoDB');
 }catch(error){
     throw error;
 }


mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB");
});

mongoose.connection.on("connected", () => {
    console.log("connected to MongoDB");
});

app.use(cors());
app.use(express.json());

app.post('/api/register', async(req, res) => {


   try{
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok' })
   }
   catch(err){
     res.json({ status: 'error', error: err.message })    
   }
});


app.post('/api/login', async(req, res) => {
        const user = await User.findOne({
             email: req.body.email,
             password: req.body.password
         })
    
         if(user){
            return res.json({ status: 'ok', user: true })
         }
         else {
            return res.json({ status: 'error', user: false })
         }

    
 });
 



app.listen(8800, () => {
    console.log('Server listening on port 3000');
    }
);
