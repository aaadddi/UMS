const express = require('express');
const app = express();
const path = require("path");
app.use(express.static("."));

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/pages/home.html');
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/pages/home.html");
});




app.listen(3000, ()=>{console.log("app started at localhost 3000 - http://localhost:3000/")});
