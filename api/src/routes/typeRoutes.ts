import { Router } from 'express';
import { getTypes, getType } from '../controller/typeController';

const router = Router();

router.get('/pokemon_types', getTypes);

router.get('/pokemon_types/:pokemon_id', getType);

export default router;
