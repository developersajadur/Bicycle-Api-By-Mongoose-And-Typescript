"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    inStock: { type: Boolean },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});
// pre middleware
OrderSchema.pre("save", function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const order = this;
    order.createdAt = new Date();
    order.updatedAt = new Date();
    if (order.quantity > 0) {
        order.inStock = true;
    }
    else if (order.quantity == 0 || order.quantity < 0)
        order.inStock = false;
    next();
});
exports.OrderModel = (0, mongoose_1.model)("orders", OrderSchema);
