import { Specie } from "../interface/specie.interface";
import SpecieModel from "../models/specie";

const getAllSpecies = async () => {
    const response = await SpecieModel.find();
    return response;
}

const getSpecieById = async (id: string) => {
    const res = await SpecieModel.findOne({_id: id});
    return res;
}

const insertSpecie = async (specie: Specie) => {
    const res = await SpecieModel.create(specie);
    return res;
}

const updateSpecieById = async (id: string, data: Specie) => {
    console.log(id);
    const res = await SpecieModel.findOneAndUpdate(
        {_id: id},
        data,
        {new: true}
    );
    return res;
}

const deleteSpecieById = async (id: string) => {
    const res = await SpecieModel.findOneAndDelete({_id: id});
    return res;
}

export { getAllSpecies, getSpecieById, insertSpecie, updateSpecieById, deleteSpecieById};
