import { Request, Response } from 'express';
import { getAllItem, getItemById } from '../models/itemModel';

export const getItems = async (req: Request, res: Response) => {
  try {
    const types = await getAllItem();
    res.status(200).send(types);
  } catch (err) {
    res.status(500).send( 'Erreur interne du serveur');
  }
};

export const getItem = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const type = await getItemById(id);
    if (type) {
      res.status(200).send(type);
    } else {
      res.status(404).send( 'Item non trouvé');
    }
  } catch (err) {
    res.status(500).send('Erreur interne du serveur');
  }
};
