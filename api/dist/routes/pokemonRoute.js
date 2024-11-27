"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemonController_1 = require("../controller/pokemonController");
const router = (0, express_1.Router)();
router.get('/pokemons', pokemonController_1.getPokemons);
router.get('/pokemons/:id', pokemonController_1.getPokemon);
exports.default = router;
