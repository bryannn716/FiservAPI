"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postFunctions_1 = __importDefault(require("../functions/postFunctions"));
const firstMiddleware = (req, res, next) => {
    req.body = postFunctions_1.default.firstParser(req.body.data);
    next();
};
const secondMiddleware = (req, res, next) => {
    req.body = postFunctions_1.default.secondParser(req.body.data);
    next();
};
exports.default = {
    firstMiddleware: firstMiddleware,
    secondMiddleware: secondMiddleware
};
