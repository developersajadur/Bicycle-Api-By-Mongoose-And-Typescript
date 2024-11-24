"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleController = void 0;
const bicycle_service_1 = require("./bicycle.service");
// create product
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const BicycleData = yield req.body;
        const result = yield bicycle_service_1.BicycleService.createBicycleDb(BicycleData);
        res.status(200).json({
            success: true,
            message: 'Bicycle created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
});
// find  product
const findAllBiCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        let filter = {};
        if (searchTerm) {
            // Search bicycles based on searchTerm
            filter = {
                $or: [
                    { name: { $regex: searchTerm, $options: 'i' } },
                    { brand: { $regex: searchTerm, $options: 'i' } },
                    { type: { $regex: searchTerm, $options: 'i' } },
                ],
            };
        }
        // Get bicycles either based on the filter or all
        const bicycles = yield bicycle_service_1.BicycleService.getAllBiCycle(filter);
        res.status(200).json({
            success: true,
            message: 'Bicycles retrieved successfully',
            data: bicycles,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({
                success: false,
                message: 'Failed to find bicycles. Please try again.',
                error: error.message || 'An unexpected error occurred',
            });
        }
        res.status(500).json({
            success: false,
            message: 'An unknown error occurred.',
        });
    }
});
// get a single bicycle
const findBiCycleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield bicycle_service_1.BicycleService.getSingleBiCycleById(productId);
        res.status(200).json({
            success: true,
            message: 'Bicycle retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to find bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
});
// update a bicycle
const updateBiCycleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updatedData = req.body;
        const result = yield bicycle_service_1.BicycleService.updateBiCycleById(productId, updatedData);
        res.status(200).json({
            success: true,
            message: 'Bicycle updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
});
// delete a bicycle
const deleteBiCycleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        yield bicycle_service_1.BicycleService.deleteBiCycleById(productId);
        res.status(200).json({
            success: true,
            message: 'Bicycle deleted successfully',
            data: {},
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete bicycle. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
});
exports.BicycleController = {
    createBicycle,
    findAllBiCycle,
    findBiCycleById,
    updateBiCycleById,
    deleteBiCycleById,
};
