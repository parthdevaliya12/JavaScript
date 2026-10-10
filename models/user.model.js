import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ""
    },
    dob: {
        type: String,
    },
    address: {
        type: String,
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O'],
    },
    phoneNo: {
        type: Number,
        required: true
    }

})

const userModel = mongoose.model("User", userSchema)

export default userModel