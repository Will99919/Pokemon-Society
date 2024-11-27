import { Request, Response } from 'express';
import { getAllMoves, getMovesById } from '../models/moveModel';

export const getMoves = async (req: Request, res: Response) => {
  try {
    const types = await getAllMoves();
    res.status(200).send(types);
  } catch (err) {
    res.status(500).send('Erreur interne du serveur');
  }
};

export const getMove = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const type = await getMovesById(id);
    if (type) {
      res.status(200).send(type);
    } else {
      res.status(404).send('Move non trouvé');
    }
  } catch (err) {
    res.status(500).send('Erreur interne du serveur');
  }
};
