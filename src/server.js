const express=require('express')
const app=express()
require('dotenv').config()
const cors=require('cors')
const session=require('cookie-session')
const connectDb=require('./config/mongoDb')
connectDb()
app.use(express.json())
app.use(cors({origin:true,credentials:true}))
app.use(session({signed:false}))
app.use('/admin/api/auth',require('./routes/auth'))

app.listen(process.env.PORT,()=>
{
    console.log("Server Started");
})