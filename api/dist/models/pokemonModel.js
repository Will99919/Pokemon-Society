"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = exports.getAllPokemons = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const createConnection_1 = __importDefault(require("../createConnection"));
dotenv_1.default.config();
const getAllPokemons = () => {
    return new Promise((resolve, reject) => {
        createConnection_1.default.query('SELECT * FROM pokemons', (err, results) => {
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
        createConnection_1.default.query('SELECT * FROM pokemons WHERE id', [id], (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
};
exports.getPokemonById = getPokemonById;
