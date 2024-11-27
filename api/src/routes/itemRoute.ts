import { Router } from "express";
import { getItem, getItems } from '../controller/itemController';

const router = Router();

router.get('/items', getItems);

router.get('/items/:id', getItem);

export default router;
  