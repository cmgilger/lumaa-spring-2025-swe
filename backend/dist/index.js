"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 4000;
// create instance server 
const app = (0, express_1.default)();
// add routing for / path
app.get('/', (req, res) => {
    res.json({
        message: "Hello World",
    });
});
// start express server
app.listen(PORT, () => {
    console.log(`Server is starting at port:${PORT}`);
});
exports.default = app;
