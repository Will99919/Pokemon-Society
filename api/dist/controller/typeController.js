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
exports.getType = exports.getTypes = void 0;
const typeModel_1 = require("../models/typeModel");
const getTypes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const types = yield (0, typeModel_1.getAllTypes)();
        res.status(200).json(types);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur interne du serveur', error: err });
    }
});
exports.getTypes = getTypes;
const getType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const type = yield (0, typeModel_1.getTypeById)(id);
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
exports.getType = getType;
