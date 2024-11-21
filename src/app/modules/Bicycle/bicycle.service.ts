import { Bicycle } from "./bicycle.interface";
import { BicycleModel } from "./bicycle.model";


const createBicycleDb = async (bicycle : Bicycle) => {
    const result = await BicycleModel.create(bicycle);
    return result;
}

export const BicycleService = {
    createBicycleDb,
};
