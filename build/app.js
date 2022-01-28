"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = __importDefault(require("./middleware/middleware"));
const postFunctions_1 = __importDefault(require("./functions/postFunctions"));
const bodyParser = __importStar(require("body-parser"));
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (req, res) => {
    res.send('Welcome to my Interview Project!');
});
app.post('/api/v1/parse', middleware_1.default.firstMiddleware, (req, res) => {
    postFunctions_1.default.doRespond(res, req.body);
});
app.post('/api/v2/parse', middleware_1.default.secondMiddleware, (req, res) => {
    postFunctions_1.default.doRespond(res, req.body);
});
app.listen(port, () => {
    console.log('Connection successful on ' + port);
});
