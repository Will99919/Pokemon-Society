"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.json(),
    transports: [new winston_1.default.transports.Console()],
});
exports.default = logger;
// const logger = winston.createLogger({
//   level: 'info',
//   transports: [
//     new winston.transports.Console({
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.simple()
//       )
//     }),
//     new winston.transports.File({
//       filename: 'logs/application.log',
//       format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.json()
//       )
//     })
//   ]
// });
