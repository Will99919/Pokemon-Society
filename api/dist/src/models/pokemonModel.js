"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = exports.getAllPokemons = void 0;
const mysql2_1 = require("mysql2");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = (0, mysql2_1.createConnection)({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
});
const getAllPokemons = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM pokemons', (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
};
exports.getAllPokemons = getAllPokemons;
const getPokemonById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM pokemons WHERE id = ?', [id], (err, results) => {
            if (err) {
                reject(err);
            }
            //   resolve(results[0]);
        });
    });
};
exports.getPokemonById = getPokemonById;
