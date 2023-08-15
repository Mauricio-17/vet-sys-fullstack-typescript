import UserModel from "../models/user";
import { generateToken } from "../utils/jwt.handle";
import { verify } from "../utils/bcrypt.handle";
import { User } from "../interface/user.interface";

const loginUser = async (user: User) => {
    const foundUser = <User> await UserModel.findOne({ email: user.email });
    if (!foundUser) 
        throw new Error("USER_NOT_FOUND");
    
    const passHash = foundUser.password;
    const isCorrect = await verify(user.password, passHash);
    if (!isCorrect) 
        throw new Error("PASSWORD_INCORRECT");

    const token = generateToken(foundUser.email);
    const {name, lastname, email} = foundUser;
    const data = {
        userDB: {
            name, lastname, email
        },
        token
    }
    return data;
}

export { loginUser };