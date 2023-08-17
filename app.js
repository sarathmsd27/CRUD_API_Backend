const express = require("express")
const mongoose = require("mongoose")
const Student = require("./models/studentmodel")

const url = "mongodb://127.0.0.1:27017/Student"
const port = 3000

const app = express()
app.use(express.json())

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Database Connected")
}).catch(error=>console.log(error))


app.listen(port,(()=>{
    console.log(`server connected at port:${port}`)
}))

//routes

app.get('/',(req,res)=>{
    res.send("Hello Node API")
})

//get route

app.get("/students",async(req,res)=>{
    try {
        const students = await Student.find({})
        res.status(200).json(students)
    } catch (error) {
        console.log(error)
     res.status(500).json({error:message.error})   
    }
})

//post routes
app.post('/student',async(req,res)=>{
   try {
     const student = await Student.create(req.body)
        res.status(200).json(student)
     }
    
   catch (error) {
    console.log(error.message)
    res.status(500).json({message:error.message})
   }
})

//update method

app.put("/students/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id,req.body)
        if(!student){
            res.status(404).json({message:`Cannot find the Id ${id}`})
        }
        const updatestudent=await Student.findById(id)
        res.status(200).json(updatestudent)

    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
})

//delete routes

app.delete("/students/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id,req.body)
        if(!student){
            res.status(404).json({message:`Cannot find the Id to delete`})
        }
        
        res.status(200).json(student)
    } catch (error) {
    console.log(error)
    res.status(500).json({message:error.message})
    }
  
})

