import { Request, Response } from "express";
import dbConnect from "../config/db";
import {
    loginUser
} from "../services/auth";
import { handleHttp } from "../utils/error.handle";

dbConnect();

const login = async ({body}: Request, res: Response) => {
    try{
        const response = await loginUser(body);
        res.send(response);
    }
    catch(err){
        if(err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

export {login}