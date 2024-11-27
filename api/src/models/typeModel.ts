import dotenv from 'dotenv';
import db from '../createConnection'

dotenv.config();

export const getAllTypes = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM types', (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

export const getTypeById = (id: number) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM types WHERE id', [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};
