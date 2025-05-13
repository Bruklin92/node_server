
const express = require('express');
const router = express.Router();

router.get('/list-products', (req, res) => {
    res.send("Hello world");    
})

router.post('/add-products', (req, res) => {
    res.send("add-products");
})

router.put('/update-products', (req, res) => {
    res.send("update-products");
})

router.delete('/delete-products', (req, res) => {
    res.send("delete-products");
})

module.exports = router;