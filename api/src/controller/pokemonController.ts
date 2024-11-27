import { Request, Response } from 'express';
import { getAllPokemons, getPokemonById } from '../models/pokemonModel';

export const getPokemons = async (req: Request, res: Response) => {
    try {
      const pokemons = await getAllPokemons();
      res.status(200).send(pokemons);
    } catch (err) {
      res.status(500).send( 'Erreur interne du serveur');
    }
  };

  export const getPokemon = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
      const pokemon = await getPokemonById(id);
      if (pokemon) {
        res.status(200).send(pokemon);
      } else {
        res.status(404).send( 'Pokémon non trouvé');
      }
    } catch (err) {
      res.status(500).send( 'Erreur interne du serveur');
    }
  };
