import { Router } from "express";
import { getPokemons, getPokemon } from '../controller/pokemonController';

const router = Router();

router.get('/pokemons', getPokemons);

router.get('/pokemons/:id', getPokemon);

export default router;
  