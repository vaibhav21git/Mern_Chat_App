const express  = require('express');
const dotenv  = require('dotenv');
const {chats} = require("./data/data")

const app  = express();
dotenv.config();


app.get('/',(req,res)=>
{
    res.send("API is running sucessfully")
})

app.get('/api/chat',(req,res)=>{
  res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>
{
    const singlechat  = chats.find((c)=> c._id === req.params.id);
    res.send(singlechat);
})

const PORT = process.env.PORT || 5000;


app.listen(5000,console.log(`Server Started on port ${PORT}`));

