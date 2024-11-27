"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemon = exports.getPokemons = void 0;
const pokemonModel_1 = require("../models/pokemonModel");
const getPokemons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemons = yield (0, pokemonModel_1.getAllPokemons)();
        res.status(200).json(pokemons);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur interne du serveur', error: err });
    }
});
exports.getPokemons = getPokemons;
const getPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const pokemon = yield (0, pokemonModel_1.getPokemonById)(id);
        if (pokemon) {
            res.status(200).json(pokemon);
        }
        else {
            res.status(404).json({ message: 'Pokémon non trouvé' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur interne du serveur', error: err });
    }
});
exports.getPokemon = getPokemon;
