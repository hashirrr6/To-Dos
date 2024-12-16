import express from "express"
import mongoose from "mongoose";
import todoSchema from "./model/todo.model.js"

const port=3001;
const app=express()
app.use(express.json())
app.use(express.static("../client-side"))

app.post("/addtodo",async (req,res)=>{
    console.log(req.body);
    const{task}=req.body
    console.log(task);

    await todoSchema.create({task,isCompleted:false})
    .then(()=>{
        res.status(201).send({msg:"successfully added"})
    })
    .catch((error)=>{
        req.status(400).send(error);
    })    
    
})

app.get("/gettodoss",async(req,res)=>{
    try{
        const todos=await todoSchema.find()
        res.status(200).send(todos)
    }catch(error){
        res.status(500).send(error)
    }
})

// is completed

app.put("/isCompleted/:_id/:iscompleted",async(req,res)=>{
    const {_id}=req.params
    console.log(req.params);
    
    const {isCompleted}=req.body
    console.log(isCompleted);
    
    await todoSchema.updateOne({_id},{$set:{isCompleted:!isCompleted}})
    .then(()=>{
    res.status(201).send({msg:"Successfully updated"})
})
.catch((error)=>{
    res.status(500).send(error)
})


})


mongoose.connect("mongodb://127.0.0.1:27017/mern")
.then(()=>{
    console.log("database Connected successfully");
    app.listen(port,()=>{
        console.log("server Created");
    })
})
.catch((error)=>{console.log(error);})
