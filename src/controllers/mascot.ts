import { Request, Response } from "express";
import dbConnect from "../config/db";
import {
    deletePetById,
    getAllPets,
    getPetById,
    insertPet,
    updatePetById
} from "../services/mascot";
import { handleHttp } from "../utils/error.handle";

dbConnect();

const getPets = async (req: Request, res: Response) => {
    try{
        const response = await getAllPets();
        res.send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const getOnePet = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await getPetById(id);
        res.send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const createPet = async ({ body }: Request, res: Response) => {
    try{
        const response = await insertPet(body);
        res.status(201).json(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const updatePet = async ({ body, params }: Request, res: Response) => {
    try{
        const { id } = params;
        console.log(id);
        const response = await updatePetById(id, body);
        res.status(202).json(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const deletePet = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await deletePetById(id);
        res.status(202).json(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

export { deletePet, getPets, getOnePet, createPet, updatePet };
