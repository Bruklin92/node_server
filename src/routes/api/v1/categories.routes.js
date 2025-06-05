const express = require('express');
const { categoriesController } = require('../../../controller/index.js');
const router = express.Router();

router.get(
    '/list-categories', 
    categoriesController.listCategories
);

router.get(
    '/get-categories/:id', 
    categoriesController.getCategory
);

router.post(
    '/add-categories',
    categoriesController.addCategories
);

router.put(
    '/update-categories/:id',
    categoriesController.updateCategory 
);

router.delete(
    '/delete-categories/:id',
    categoriesController.deleteCategory
);

router.get(
    '/active-categories/',
    categoriesController.ActiveCategory
);

module.exports = router;