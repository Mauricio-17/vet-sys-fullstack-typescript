import { User } from "../interface/user.interface";
import UserModel from "../models/user";
import { encrypt } from "../utils/bcrypt.handle";

const insertUser = async (user: User) => {
    const existUser = <boolean> await UserModel.findOne({ email: user.email });
    if(existUser)
        throw new Error("USER_ALREADY_EXISTS");
    
    const passHash = await encrypt(user.password);
    user.password = passHash;
    const response = await UserModel.create(user);
    return response;
}

const getUserById = async (id: string) => {
    const response = await UserModel.findOne({ _id: id });
    return response;
};

const updateUserById = async (id: string, data: User) => {
    const response = await UserModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true }
    );
    return response;
};

const deleteUserById = async (id: string) => {
    const response = await UserModel.findOneAndRemove({_id: id});
    return response;

}


export { insertUser, getUserById, updateUserById, deleteUserById };