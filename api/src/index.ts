import express, { Express } from "express";
import dotenv from 'dotenv';
import logger from './logger';
import db from './createConnection';

dotenv.config();

const app: Express = express();
app.use(express.json());

const port = process.env.PORT;

db.connect((err) => {
  if (err) {
    logger.error(`Échec de la connexion à la base de données Pokedex ${port}`);
  } else {
    logger.info(`Connexion réussie à la base de données Pokedex: ${port}`);
  }
});


