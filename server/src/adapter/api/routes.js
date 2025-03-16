"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRouter = void 0;
const express_1 = __importDefault(require("express"));
const url_controller_1 = require("../controller/url.controller");
exports.urlRouter = express_1.default.Router();
exports.urlRouter.post("/shorten", url_controller_1.shortenUrl);
exports.urlRouter.get("/:slug", url_controller_1.redirectUrl);
