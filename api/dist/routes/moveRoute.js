"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const moveController_1 = require("../controller/moveController");
const router = (0, express_1.Router)();
router.get('/moves', moveController_1.getMoves);
router.get('/moves/:id', moveController_1.getMove);
exports.default = router;
