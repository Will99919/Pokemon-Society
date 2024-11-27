"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemController_1 = require("../controller/itemController");
const router = (0, express_1.Router)();
router.get('/items', itemController_1.getItems);
router.get('/items/:id', itemController_1.getItem);
exports.default = router;
