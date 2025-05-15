import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    worksInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true,
        }
    ],

}, { timeseries: true });

export const Doctor = mongoose.model('Doctor', doctorSchema)