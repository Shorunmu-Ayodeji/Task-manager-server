require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 4000;
const taskRouter = require('./route/taskRoute')

//middleware
app.use(express.json())

app.use('/api/tasks', taskRouter)

//db connection nd liten for req
const startServer = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: "Tasks",
        });

        app.listen(PORT, () => {
            console.log(`server running on port : ${PORT}..`);
        });
        } catch (error) {
            console.log(error);
    }
};
startServer()


//error route
app.use((req,res) =>{
    res.status(404).json({success: false, msg: "resource not found"})
})
    