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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.OrderService.createOrderDb(orderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create order. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
});
// showTotalRevenue
const showTotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.OrderService.showTotalRevenue();
        res.status(200).json({
            success: true,
            message: 'Revenue calculated successfully',
            data: totalRevenue,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch total revenue. Please try again.',
            error: error.message || 'An unexpected error occurred',
        });
    }
});
exports.OrderController = {
    createOrder,
    showTotalRevenue,
};
