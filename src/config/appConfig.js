import { config } from 'dotenv';

config();

export default {
  url: `http://localhost:${process.env.PORT}`,
};
