import doteenv from 'dotenv';

doteenv.config();

const port = process.env.PORT;
import './database';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { resolve } from 'path';

// Routes Imports
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import studentRoutes from './routes/studentRoutes';
import pictureRoutes from './routes/pictureRoutes';

const whiteList = [
  `http://localhost:${port}`,
];

const corsOptions = {
  origin(origin, cb) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      cb(null, true);
    } else {
      cb(new Error('Não autorizado pelo CORS'));
    }
  },
};

const app = express();

// Middlewares
app.use(cors(corsOptions));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, '..', 'static')));

// Routes
app.use('/', homeRoutes);
app.use('/users/', userRoutes);
app.use('/tokens/', tokenRoutes);
app.use('/students/', studentRoutes);
app.use('/pictures/', pictureRoutes);

export default app;
