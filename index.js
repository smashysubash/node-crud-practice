const express = require('express')
const port = 3000
const app = express()

require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.URL)
const database = mongoose.connection

database.on('error',(error)=>{
    console.log('error on connecting db')
})
database.once('connected',()=>{
    console.log('DB connected')
})


app.get('/',(req,res)=>{
    res.send('helloooo')
})

const userroute = require('./routes/userroute')
app.use('/user',userroute)

app.listen(port,()=>{
    console.log('server upp')
})