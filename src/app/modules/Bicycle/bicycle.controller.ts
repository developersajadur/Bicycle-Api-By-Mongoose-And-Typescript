import { Request, Response } from "express";
import { BicycleService } from "./bicycle.service";


const createBicycle = async(req : Request, res: Response) => {
    try {
        const BicycleData = await req.body;
        const result = await BicycleService.createBicycleDb(BicycleData);
        res.status(200).json({
            success: true,
            message: 'Bicycle created successfully',
            data: result,
          });
          console.log(result);
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: 'Failed to create bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
        console.log(error);
    }
}


export const BicycleController = {
    createBicycle,
}