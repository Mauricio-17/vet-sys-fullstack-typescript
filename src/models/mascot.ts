import { Schema, model } from "mongoose";

import { Mascot } from "../interface/mascot.interface";


const MascotSchema = new Schema<Mascot>(
    {
        name: {
            type: String,
            required: [true, 'Nombre requerido']
        },
        genre: {
            type: Boolean,
            required: [true, 'Género requerido']
        },
        dateBorn: {
            type: Date
        },
        specie: {
            type: String, 
            required: [true, 'Especie requerida']
        },
        owner: {
            type: String
        },
        breed: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const MascotModel = model("mascot", MascotSchema);
export default MascotModel;
