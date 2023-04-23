import doteenv from 'dotenv';

doteenv.config();

import './database';

import express from 'express';

// Routes
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import studentRoutes from './routes/studentRoutes';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', homeRoutes);
app.use('/users/', userRoutes);
app.use('/tokens/', tokenRoutes);
app.use('/students/', studentRoutes);

export default app;
