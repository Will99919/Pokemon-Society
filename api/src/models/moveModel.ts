import dotenv from 'dotenv';
import db from '../createConnection'
dotenv.config();

export const getAllMoves = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM moves', (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

export const getMovesById = (id: number) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM moves WHERE id', [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};
