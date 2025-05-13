const express = require('express');
const router = express.Router();

router.get('/list-subCategories', (req, res) => {
    res.send("list subCategories");
});

router.post('/add-subCategories', (req, res) => {
    res.send("add-subCategories");
});

router.put('/update-subCategories', (req, res) => {
    res.send("update subCategories");
});

router.delete('/delete-subCategories', (req, res) => {
    res.send("delete subCategories");
});

module.exports = router;