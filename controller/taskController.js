const Tasks = require('../models/task')

const getAllTask = async(req,res) => {
try {
    const tasks = await Tasks.find()
    res.status(200).json({ tasks })
} catch (error) {
    res.json(error);
    console.log(error);
}
}
const getASingleTask = async(req,res) => {
    const {taskId} =req.params
try {
   const task=await Tasks.findById({_id: taskId})
   if(!task) {
    return res.status(404).json({success: false,});
   }
   res.status(200).json({task})
} catch (error) {
    res.json(error);
    console.log(error);
}
}
const createTask = async(req,res) => {
try {
    const task = await Tasks.create(req.body)
    res.status(201).json({task})
} catch (error) {
    res.json(error);
    console.log(error);  
}
}


const updateTask = async(req,res) => {
    const {taskId} =req.params
try {
    const task = await Tasks.findByIdAndUpdate({_id: taskId}, req.body, {
        new: true, runValidators: true
    })
    if(!task) {
    return res.status(404).json({success: false,})
    }

    res.status(200).json({task})
} catch (error) {
    res.json(error);
    console.log(error);   
}
}
const deleteTask = async(req,res) => {
    const {taskId} =req.params
try {
    const task = await Tasks.findByIdAndDelete({_id: taskId });
    res.status(200).json({sucess: true, task})
} catch (error) {
    res.json(error);
    console.log(error); 
}
}

module.exports ={
    getAllTask,
    getASingleTask,
    createTask,
    updateTask,
    deleteTask
}