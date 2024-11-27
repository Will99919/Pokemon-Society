"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("./logger"));
const createConnection_1 = __importDefault(require("./createConnection"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT;
createConnection_1.default.connect((err) => {
    if (err) {
        logger_1.default.error("Échec de la connexion à la base de données Pokedex ");
    }
    else {
        logger_1.default.info(`Connexion réussie à la base de données Pokedex: ${port}`);
    }
});
