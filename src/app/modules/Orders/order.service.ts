import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderDb = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const showTotalRevenue = async () => {
  const totalRevenue = await OrderModel.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);
  return totalRevenue;
};

export const OrderService = {
  createOrderDb,
  showTotalRevenue,
};
