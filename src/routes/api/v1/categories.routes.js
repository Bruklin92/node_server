const express = require('express');
const router = express.Router();

router.get('/list-categories', (req, res) => {
    res.send("list categories");
});

router.post('/add-categories', (req, res) => {
    res.send("add-categories");
});

router.put('/update-categories', (req, res) => {
    res.send("update category");
});

router.delete('/delete-categories', (req, res) => {
    res.send("delete category");
});

module.exports = router;