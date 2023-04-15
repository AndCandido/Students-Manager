import express from 'express';
import homeRoutes from './routes/homeRoutes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', homeRoutes);

export default app;
