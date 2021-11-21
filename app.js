const express = require ("express")
const app = express()
const mongoose = require("mongoose")
const url ="mongodb+srv://Anushka:anushka123@cluster0.ozi4z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const myySchema = require('./appSchema');
mongoose.connect(url).then(()=>console.log("Connected to DB"))
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
    const student = req.body.student_name;
    const registration = req.body.reg_no;
    const submarks = req.body.marks;

    try{
        const newApp = new myySchema(
            {
                student_name:student,
                reg_no:registration,
                marks:submarks
            }
        )
            const savedApp = await newApp.save()
            res.json(
                {"message":"App is saved","data":savedApp}
            )
        
    }catch(err){
        res.json(err);
    
    }

})

app.use("/", (req,res)=>{
    res.json(
        {"message":"Express server has started"}
    )
})

app.listen(3001,()=>console.log("Express server started"))
