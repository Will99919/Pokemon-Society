import dotenv from 'dotenv';
import db from '../createConnection'
import express, { Express } from "express";

dotenv.config();

export const getAllItem = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM items', (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

export const getItemById = (id: number) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM items WHERE id', [id], (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

