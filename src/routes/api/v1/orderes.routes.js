const express = require('express');
const router = express.Router();

router.get('/list-orderes', (req, res) => {
    res.send("list orderes");
});

router.post('/add-orderes', (req, res) => {
    res.send("add-orderes");
});

router.put('/update-orderes', (req, res) => {
    res.send("update orderes");
});

router.delete('/delete-orderes', (req, res) => {
    res.send("delete orderes");
});

module.exports = router;