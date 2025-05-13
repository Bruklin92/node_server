const express = require('express');
const router = express.Router();

router.get('/list-variants', (req, res) => {
    res.send("list variants");
});

router.post('/add-variants', (req, res) => {
    res.send("add-variants");
});

router.put('/update-variants', (req, res) => {
    res.send("update variants");
});

router.delete('/delete-variants', (req, res) => {
    res.send("delete variants");
});

module.exports = router;