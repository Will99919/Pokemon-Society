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
exports.getItem = exports.getItems = void 0;
const itemModel_1 = require("../models/itemModel");
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const types = yield (0, itemModel_1.getAllItem)();
        res.status(200).json(types);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur interne du serveur', error: err });
    }
});
exports.getItems = getItems;
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const type = yield (0, itemModel_1.getItemById)(id);
        if (type) {
            res.status(200).json(type);
        }
        else {
            res.status(404).json({ message: 'Type non trouvé' });
        }
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur interne du serveur', error: err });
    }
});
exports.getItem = getItem;