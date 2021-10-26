//Server start

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

async function start(){
    try{
        await mongoose.connect('mongodb+srv://telematica:<telematica>@cluster0.twlws.mongodb.net/todo?retryWrites=true&w=majority',{
            //to delete warnings:
            useNewUrlParser = true,
            useUnifiedTopology = true,
            useCreateIndex = true,
            useFindAndModigy = true
        })

        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        })
    }catch(err){console.error(err)}
}