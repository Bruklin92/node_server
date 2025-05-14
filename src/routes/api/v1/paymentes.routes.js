const express = require('express');
const router = express.Router();

router.get('/list-paymentes', (req, res) => {
    res.send("list paymentes");
});

router.post('/add-paymentes', (req, res) => {
    res.send("add-paymentes");
});

router.put('/update-paymentes', (req, res) => {
    res.send("update paymentes");
});

router.delete('/delete-paymentes', (req, res) => {
    res.send("delete paymentes");
});

module.exports = router;