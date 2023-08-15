import { Request, Response } from "express";
import dbConnect from "../config/db";
import {
    deleteSpecieById,
    getAllSpecies,
    getSpecieById,
    insertSpecie,
    updateSpecieById
} from "../services/specie";
import { handleHttp } from "../utils/error.handle";

dbConnect();

const getSpecies = async (req: Request, res: Response) => {
    try{
        const response = await getAllSpecies();
        res.send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const getOneSpecie = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await getSpecieById(id);
        res.send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const createSpecie = async ({ body }: Request, res: Response) => {
    try{
        const response = await insertSpecie(body);
        res.status(201).send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const updateSpecie = async ({ params, body }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await updateSpecieById(id, body);
        res.status(202).send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const deleteSpecie = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await deleteSpecieById(id);
        res.status(202).send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

export { updateSpecie, getSpecies, getOneSpecie, deleteSpecie, createSpecie };