"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeController_1 = require("../controller/typeController");
const router = (0, express_1.Router)();
router.get('/pokemon_types', typeController_1.getTypes);
router.get('/pokemon_types/:pokemon_id', typeController_1.getType);
exports.default = router;
