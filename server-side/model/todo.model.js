import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    task:{type:String},
    isCompleted:{type:Boolean}
})

export default mongoose.todos||mongoose.model("todos",todoSchema)