import mongoose from "mongoose";

const compatibilidadSchema = new mongoose.Schema(
    {
        idEmulador:{
            type: mongoose.Types.ObjectId,
            ref: 'Emulador',
            require: [true, "emulador  is required"],
        },
        idConsole:{
            type:mongoose.Types.ObjectId,
            ref:'Console',
            require:[true,'console is required'],
        }
    });

export const CompatibilidadModel = mongoose.model('Compatibilidad', compatibilidadSchema);
