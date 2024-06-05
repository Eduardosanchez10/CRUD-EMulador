import mongoose from "mongoose";

const consoleSchema = new mongoose.Schema({
        name:{
            type: String,
            required: [true, 'name is required'],
        },
        creador:{
            type:String,
            required: [true, 'creador is required'],
        },
    });

export const ConsoleModel = mongoose.model('Console', consoleSchema);
