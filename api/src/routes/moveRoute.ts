import { Router } from "express";
import { getMove, getMoves } from '../controller/moveController';

const router = Router();

router.get('/moves', getMoves);

router.get('/moves/:id', getMove);

export default router;
  