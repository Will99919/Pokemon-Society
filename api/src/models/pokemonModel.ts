import dotenv from 'dotenv';
import db from '../createConnection'

dotenv.config();

export const getAllPokemons = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM pokemons', (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

export const getPokemonById = (id: number) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM pokemons WHERE id', [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};
