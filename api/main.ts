import pokemonRoutes from './src/routes/pokemonRoute';
import typeRoutes from './src/routes/typeRoutes';
import moveRoutes from './src/routes/moveRoute';
import itemRoutes from './src/routes/itemRoute';
import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import logger from './src/logger';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenue dans le Pokédex numérique !');
  });
  
  app.listen(port, () => {
    logger.info(`Serveur démarré sur le port ${port}`);
  });

app.use('/api/src/routes', pokemonRoutes);
app.use('/api/src/routes', typeRoutes);
app.use('/api/src/routes', moveRoutes);
app.use('/api/src/routes', itemRoutes);

