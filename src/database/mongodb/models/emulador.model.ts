import mongoose from "mongoose";

const emuladorSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, 'name is required'],
        },
        plataform:{
            type: String,
            required: [true, 'plataform is required'],
        },
        developer:{
            type:String,
            required: [true, 'developer is required'],
        },
        license:{
            type:String,
        
        }
    });

export const EmuladorModel = mongoose.model('Emulador', emuladorSchema);
