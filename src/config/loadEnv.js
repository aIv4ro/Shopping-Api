import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(`./.env.${process.env.NODE_ENV}`).trim();
dotenv.config({ path: envPath });
