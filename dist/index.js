"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const products = [{ title: 'tomato' }, { title: 'orange' }];
const addresses = [{ value: 'Druzbi 6' }, { value: 'Lenina 234' }];
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/products/:productTitle', (req, res) => {
    let product = products.find(p => p.title === req.params.productTitle);
    res.send(product);
});
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
