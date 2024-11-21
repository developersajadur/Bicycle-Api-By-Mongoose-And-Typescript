import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { biCycleRoute } from './app/modules/Bicycle/bicycle.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());


// Routes
app.use("/api", biCycleRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
