import { Request, Response } from 'express';
import { OrderService } from './order.service';

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderData = req.body;
    const result = await OrderService.createOrderDb(orderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create order. Please try again.',
      error: error.message || 'An unexpected error occurred',
    });
  }
};

// showTotalRevenue

const showTotalRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const totalRevenue = await OrderService.showTotalRevenue();
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: totalRevenue,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch total revenue. Please try again.',
      error: error.message || 'An unexpected error occurred',
    });
  }
};

export const OrderController = {
  createOrder,
  showTotalRevenue,
};
