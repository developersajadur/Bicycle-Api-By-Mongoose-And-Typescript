import express from 'express';
import { BicycleController } from './bicycle.controller';

const router = express.Router()

router.post("/products", BicycleController.createBicycle)


export const biCycleRoute = router;