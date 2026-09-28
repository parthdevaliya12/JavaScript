import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema(
    {

        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        orderPrice: {
            type: Number,
            required: true
        },
        orderItems: {
            type: [orderItemSchema]
        },
        address: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["Pending", "Cancelled", "Delivered"],
            default: "Pending"
        }
    },
    { timestamps: true }
)

export default Order = mongoose.model("Order", orderSchema)