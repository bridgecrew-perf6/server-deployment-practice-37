'use strict';

const express = require('express');
const res = require('express/lib/response');
const app = express();



function start(PORT){
    app.listen( PORT,()=>{
console.log(`listen to port ${PORT}`);
    })
}

app.get('/',(req,res)=>{
   
 res.send('the home route.') ;  
})

app.get('/data',(req,res)=>{

    res.status(200).json({
        name : 'bushra' ,
        email : 'bushradawdyeh@gmail.com'
    });
})

module.exports = {
app : app ,
start : start
}