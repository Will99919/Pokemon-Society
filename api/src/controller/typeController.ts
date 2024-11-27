import { Request, Response } from 'express';
import { getAllTypes, getTypeById } from '../models/typeModel';

export const getTypes = async (req: Request, res: Response) => {
  try {
    const types = await getAllTypes();
    res.status(200).send(types);
  } catch (err) {
    res.status(500).send('Erreur interne du serveur');
  }
};

export const getType = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const type = await getTypeById(id);
    if (type) {
      res.status(200).send(type);
    } else {
      res.status(404).send('Controller non trouvé');
    }
  } catch (err) {
    res.status(500).send('Erreur interne du serveur');
  }
};
