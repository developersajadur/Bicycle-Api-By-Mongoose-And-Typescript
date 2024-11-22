import { Bicycle } from "./bicycle.interface";
import { BicycleModel } from "./bicycle.model";


const createBicycleDb = async (bicycle : Bicycle) => {
    const result = await BicycleModel.create(bicycle);
    return result;
}
const getAllBiCycle = async () => {
    const result = await BicycleModel.find();
    return result;
}
const getSingleBiCycleById = async (_id: string) => {
    const result = await BicycleModel.findOne({_id});
    return result;
}

export const BicycleService = {
    createBicycleDb, 
    getAllBiCycle,
    getSingleBiCycleById,
};
