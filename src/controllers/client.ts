import { Request, Response } from "express";
import dbConnect from "../config/db";
import {
    deleteClientById,
    getAllClients,
    getClientById,
    insertClient,
    updateClientById
} from "../services/client";
import { handleHttp } from "../utils/error.handle";

dbConnect();

const getClients = async (req: Request, res: Response) => {
    try {
        const response = await getAllClients();
        res.send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
        
    }
}

const getOneClient = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getClientById(id);
        res.send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const createClient = async ({ body }: Request, res: Response) => {
    try {
        const response = await insertClient(body);
        res.status(201).send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const updateClient = async ({ body, params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateClientById(id, body);
        res.send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

const deleteClient = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteClientById(id);
        res.status(202).send(response);
    }
    catch (err) {
        if (err instanceof Error)
            handleHttp(res, err, err.message);
    }
}

export { getClients, getOneClient, createClient, deleteClient, updateClient };
