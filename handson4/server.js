const express = require('express');
const auth = require('./route/auth');
const app = express()
app.use(express.json());
app.use('/auth',auth)
app.get('/',(req,res)=>
{
    res.send('<h1>this is express server msg</h1> ')
    console.log(req);
})
app.listen(5000, ()=>{
    console.log("last handson node js ")
})