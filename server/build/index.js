"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const App = express_1.default();
App.use(cors_1.default());
App.use(morgan_1.default("dev"));
App.use(express_1.default.json());
App.use("/api", require('../routes'));
require('../config/connection');
App.listen(5000, () => console.log(`server is up and running ${process.env.NODE_ENV}`));
