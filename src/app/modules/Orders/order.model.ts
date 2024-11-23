import { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const OrderSchema = new Schema<Order>({
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    inStock: { type: Boolean},
    createdAt: { type: Date },
    updatedAt: { type: Date },
})


// pre middleware

OrderSchema.pre<Order>("save", function(next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const order = this;
    order.createdAt = new Date();
    order.updatedAt = new Date();
    if(order.quantity > 0 ){
        order.inStock = true;
    }else if(order.quantity == 0 || order.quantity < 0)
        order.inStock = false;
    next()
})


export const OrderModel = model<Order>("orders", OrderSchema);