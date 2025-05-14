const express = require('express');
const router = express.Router();

router.get('/list-offeres', (req, res) => {
    res.send("list offeres");
});

router.post('/add-offeres', (req, res) => {
    res.send("add-offeres");
});

router.put('/update-offeres', (req, res) => {
    res.send("update offeres");
});

router.delete('/delete-offeres', (req, res) => {
    res.send("delete offeres");
});

module.exports = router;