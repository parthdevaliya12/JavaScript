import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYear: {
        type: Number,
        default: 0
    },
    workInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        },
          
    ]
}, { timestamps: true })

export default Doctor = mongoose.model("Doctor", doctorSchema)