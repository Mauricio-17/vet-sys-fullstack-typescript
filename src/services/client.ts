import { Client } from "../interface/client.interface";
import ClientModel from "../models/client";

const insertClient = async (client: Client) => {
    const response = await ClientModel.create(client);
    return response;
}

const getAllClients = async () => {
    const response = await ClientModel.find();
    return response;
}

const getClientById = async (id: string) => {
    const response = await ClientModel.findOne({_id: id});
    return response;
}

const updateClientById = async (id: string, data: Client) => {
    const response = await ClientModel.findOneAndUpdate(
        {_id: id},
        data,
        {new: true}
    );
    return response;
}

const deleteClientById = async (id: string) => {
    const response = await ClientModel.findOneAndDelete({_id: id});
    return response;
}

export { insertClient, getAllClients, getClientById, updateClientById, deleteClientById};

