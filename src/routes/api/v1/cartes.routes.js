const express = require('express');
const router = express.Router();

router.get('/list-cart', (req, res) => {
    res.send("list cart");
});

router.post('/add-cart', (req, res) => {
    res.send("add-cart");
});

router.put('/update-cart', (req, res) => {
    res.send("update cart");
});

router.delete('/delete-cart', (req, res) => {
    res.send("delete cart");
});

module.exports = router;