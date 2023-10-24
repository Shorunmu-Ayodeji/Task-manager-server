const mongoose = require('mongoose')
const Schema = mongoose.Schema


const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength:3,
    },
    description:{
        type:String,
        required:true,
    },
    tags:{
        type: String,
        enum:{
            values:['important','urgent','completed']
        }
        
    }
},
{timestamps: true}
);

module.exports = mongoose.model('Task', taskSchema)