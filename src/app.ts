import express, { Request, Response } from 'express';
import cors from 'cors';
import { biCycleRoute } from './app/modules/Bicycle/bicycle.route';
const app = express();

// parsers
app.use(express.json());
app.use(cors());


// Routes
app.use("/api", biCycleRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Bicycle Server Is Running',
  });
});

export default app;
