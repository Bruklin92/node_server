const express = require('express');
const { categoriesController } = require('../../../controller/index.js');
const router = express.Router();

router.get('/list-categories', (req, res) => {
    res.send("list categories");
});

router.post(
    '/add-categories',
    categoriesController.addCategories
);

router.put('/update-categories', (req, res) => {
    res.send("update category");
});

router.delete('/delete-categories', (req, res) => {
    res.send("delete category");
});

module.exports = router;