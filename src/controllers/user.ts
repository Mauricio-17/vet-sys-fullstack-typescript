import { Request, Response } from "express";
import dbConnect from "../config/db";

import {
    deleteUserById,
    getUserById,
    insertUser,
    updateUserById
} from "../services/user";
import { handleHttp } from "../utils/error.handle";

dbConnect();

const getOneUser = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getUserById(id);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const createUser = async ({ body }: Request, res: Response) =>{
    try{
        const response = await insertUser(body);
        res.status(201).send(response)
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const updateUser = async ({ body, params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await updateUserById(id, body);
        res.status(202).send(response)
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const deleteUser = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await deleteUserById(id);
        res.status(202).send(response)
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

export { getOneUser, deleteUser, updateUser, createUser };