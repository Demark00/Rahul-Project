import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
        },
        phone: {
            type:Number,
            required:true,
            maxLength:10,
        },
        message: {
            type: String,
            default: "",
        }
    },
    {timestamps: true}
)

const Form = mongoose.model("form", formSchema)

export default Form