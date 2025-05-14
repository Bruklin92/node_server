const express = require('express');
const router = express.Router();

router.get('/list-reviewes', (req, res) => {
    res.send("list reviewes");
});

router.post('/add-reviewes', (req, res) => {
    res.send("add-reviewes");
});

router.put('/update-reviewes', (req, res) => {
    res.send("update reviewes");
});

router.delete('/delete-reviewes', (req, res) => {
    res.send("delete reviewes");
});

module.exports = router;