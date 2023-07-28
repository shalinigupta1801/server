const mongoose = require('mongoose');
const {Schema} = require('mongoose');

//Notes Schema

const toDoListSchema = new Schema({
    id: {type: Number},
    title: {type:String, required:true},
    description: {type:String, required:true}
})

const ToDoList = mongoose.model('ToDoList', toDoListSchema);
exports.ToDoList = ToDoList;