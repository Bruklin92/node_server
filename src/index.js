require('dotenv').config()

const express = require('express');
const app = express();

app.get('/products/get-products', (req, res) => {
    res.send("Hello world");
})

app.post('/products/add-products', (req, res) => {
    res.send("add-products");
})

app.put('/products/update-products', (req, res) => {
    res.send("update-products");
})

app.delete('/products/delete-products', (req, res) => {
    res.send("delete-products");
})

app.listen(process.env.PORT,() => {
    console.log(`Server started at ${process.env.PORT}`);
});