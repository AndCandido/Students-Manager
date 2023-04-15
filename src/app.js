import doteenv from 'dotenv';

doteenv.config();

import express from 'express';
import homeRoutes from './routes/homeRoutes';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', homeRoutes);

export default app;
