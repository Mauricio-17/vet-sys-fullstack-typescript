import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { User } from "../interface/user.interface";

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: [true, "Nombre requerido"]
        },
        lastname: {
            type: String,
            required: [true, "Apellido requerido"]
        },
        email: {
            type: String, // Array<string> equivalent
            required: [true, "Email requerido"],
            unique: true,
            validate: [(email: string) => 
                email.includes('@') && email.endsWith('.com'), "Coloca un email válido"]
        },
        password: {
            type: String, 
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

UserSchema.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique.',
    type: 'mongoose-unique-validator'
});

const UserModel = model("user", UserSchema);
export default UserModel;