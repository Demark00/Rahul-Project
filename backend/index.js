import express from "express"
const app = express()
const PORT = 8000;
import Form from "./models/form.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

// Add JSON middleware
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

// app.get('/', (req, res)=>{
//     res.send("Hello World")
// })

app.post('/form', async (req,res)=>{
    try{
        const {name, email, phone, message} = req.body
        if(!name || !email || !phone){
            return res.status(400).json({message: "Credentials not provided"})
        }

        // Validate phone number format
        if(!/^\d{10}$/.test(phone)) {
            return res.status(400).json({message: "Phone number must be exactly 10 digits"})
        }

        const newform = new Form({name, email, phone, message})
        await newform.save()

        res.status(200).json({
            id: newform._id,
            name: newform.name,
            email: newform.email,
            phone: newform.phone,
            message: newform.message
        })

    }catch(err){
        console.log("Error:", err.message)
        res.status(500).json({message: "Internal server error"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
    connectDB();
})