import { Schema, model } from "mongoose";

import { Specie } from "../interface/specie.interface";


const SpecieSchema = new Schema<Specie>(
    {
        name: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },
        type: {
            type: [String], // Array<string> equivalent
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const UserModel = model("specie", SpecieSchema);
export default UserModel;
