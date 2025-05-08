require('dotenv').config()

const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.send("Hello world");
})

app.listen(process.env.PORT,() => {
    console.log(`Server started at ${process.env.PORT}`);
});