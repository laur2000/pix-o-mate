import dotenv from 'dotenv';

dotenv.config();

export interface Env {
  PORT: number;
}

const PORT = Number(process.env.PORT) || 3000;

export const env: Env = {
  PORT,
};
