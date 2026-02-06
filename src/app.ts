import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import profileRoutes from './api/routes/profile.routes';

const app = express();

//middlewares
app.use(express.json()); //json body parser
app.use(cors());         //to allow frontend for communication
app.use(helmet());       //scurity headers

//health check (
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

//mounting routes
app.use('/api/v1/profile', profileRoutes);

//global error handler (production ready)
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

export default app;