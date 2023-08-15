import { Mascot } from "../interface/mascot.interface";
import MascotModel from "../models/mascot";

const getAllPets = async () => await MascotModel.find();

const getPetById = async (id: string) => await MascotModel.findOne({_id: id});

const insertPet = async (pet: Mascot) => await MascotModel.create(pet);

const updatePetById = async (id: string, data: Mascot) => await MascotModel.findOneAndUpdate(
    {_id: id},
    data,
    {new: true}
);

const deletePetById = async (id: string) => await MascotModel.findOneAndDelete({_id: id});

export { getAllPets, getPetById, insertPet, updatePetById, deletePetById};

