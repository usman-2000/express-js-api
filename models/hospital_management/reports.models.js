import mongoose from "mongoose";

const medicinesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    scientific_name:{
        type: String,
        required: true
    },
    brand_name:{
        type: String,
        required: true
    },
    routine:{
        type:String,
        enum:['1+1+1','1+0+1',"1+0+0",'0+1+1','0+0+1'],
        default: '1+1+1'
    }
})

const reportSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Patient',
        required:true
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    },
    disease:{
        type: String,
        required: true
    },
    medicine: [medicinesSchema]
    
},{timestamps:true})

export const Report = mongoose.model('Report',reportSchema)