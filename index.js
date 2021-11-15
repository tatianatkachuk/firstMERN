//Server start

const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth.routes')
const todoRoutes = require('./routes/todo.routes')

const app = express()
const PORT = process.env.PORT || 5000


app.use(express.json({extended: true}))
app.use('/api/auth', authRoutes)
app.use('/api/todo', todoRoutes)

async function start(){
    try{
        await mongoose.connect('mongodb+srv://telematica:telematica@cluster0.twlws.mongodb.net/todo?retryWrites=true&w=majority',{
            //to delete warnings:
            /*useNewUrlParser = true,
            useUnifiedTopology = true,
            useCreateIndex = true,
            useFindAndModigy = true*/
        })

        app.listen(PORT, ()=>{
            console.log(`Server started on port ${PORT}`)
        })
    }catch(err){console.error(err)}
}
start()