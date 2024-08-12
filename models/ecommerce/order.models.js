import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity:{
        type: Number,
        required:true
    }
})

const billingAddressSchema = new mongoose.Schema{
    houseNumber: {
        type: String,
        required:true
    }
}

const orderSchema = new mongoose.Schema({
    orderPrice : {
        type: Number,
        required : true
    },
    buyer :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    orderItems : [orderItemSchema],
    billingAddress:{
        type:String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    }

},{timestamps:true})

export const Order = mongoose.model('Order',orderSchema)