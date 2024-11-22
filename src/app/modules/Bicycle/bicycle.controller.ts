import { Request, Response } from "express";
import { BicycleService } from "./bicycle.service";

// create product
const createBicycle = async(req : Request, res: Response) => {
    try {
        const BicycleData = await req.body;
        const result = await BicycleService.createBicycleDb(BicycleData);
        res.status(200).json({
            success: true,
            message: 'Bicycle created successfully',
            data: result,
          });
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: 'Failed to create bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
}


// find add product
const findAllBiCycle = async(req : Request, res : Response) => {
    try {
        const result = await BicycleService.getAllBiCycle();
        res.status(200).json({
            success: true,
            message: 'Bicycles retrieved successfully',
            data: result,
        });
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: 'Failed to find bicycles. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
}

// get a single bicycle

const findBiCycleById = async(req : Request, res : Response) => {
    try {
        const productId = req.params.productId;
        const result = await BicycleService.getSingleBiCycleById(productId);
        res.status(200).json({
            success: true,
            message: 'Bicycle retrieved successfully',
            data: result,
        });
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: 'Failed to find bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
}

// update a bicycle

const updateBiCycleById = async(req : Request, res : Response) => {
    try {
        const productId = req.params.productId;
        const updatedData = req.body;
        const result = await BicycleService.updateBiCycleById(productId, updatedData);
        res.status(200).json({
            success: true,
            message: 'Bicycle updated successfully',
            data: result,
        });
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: 'Failed to update bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
}

// delete a bicycle

const deleteBiCycleById = async(req : Request, res : Response) => {
    try {
        const productId = req.params.productId;
        const result = await BicycleService.deleteBiCycleById(productId);
        res.status(200).json({
            success: true,
            message: 'Bicycle deleted successfully',
            data: {},
        });
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
}


export const BicycleController = {
    createBicycle,
    findAllBiCycle,
    findBiCycleById,
    updateBiCycleById,
    deleteBiCycleById
}