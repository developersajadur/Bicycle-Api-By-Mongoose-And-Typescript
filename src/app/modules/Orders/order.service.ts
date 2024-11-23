import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

 const createOrderDb = async(order : Order) => {
    const result = await OrderModel.create(order);
    return result;

 }

 export const OrderService = {
    createOrderDb,
 }