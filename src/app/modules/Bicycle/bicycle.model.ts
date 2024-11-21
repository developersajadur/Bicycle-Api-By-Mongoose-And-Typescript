import { model, Schema } from "mongoose";
import { Bicycle } from "./bicycle.interface";

const BicycleSchema = new Schema<Bicycle>({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
})

export const BicycleModel = model<Bicycle>('bicycle', BicycleSchema)