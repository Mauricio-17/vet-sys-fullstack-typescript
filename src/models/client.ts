import { Schema, model } from "mongoose";

import { Client } from "../interface/client.interface";


const ClientSchema = new Schema<Client>(
    {
        name: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        cellphone: {
            type: String, // Array<string> equivalent
            required: [true, 'Nro de celular requerido'],
            minLength: [6, 'Numero telefónico mínimo de 6 carácteres'],
            maxLenght: [15, 'Numero telefónico mínimo de 15 carácteres']
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ClientModel = model("client", ClientSchema);
export default ClientModel;
