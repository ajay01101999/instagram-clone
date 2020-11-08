const express = require('express');

const app=express();



app.get('/',(req,res)=>{
    res.send(__dirname+'WhatsApp Image 2020-10-25 at 6.06.06 PM.jpeg');
})

app.listen(process.env.PORT,console.log(process.env.PORT));