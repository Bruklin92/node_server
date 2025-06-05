const express = require('express');
const { subCategoriesController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-subCategories',
    subCategoriesController.listsubCategories
);

router.post(
    '/add-subCategories', 
    subCategoriesController.addsubCategories
);

router.put(
    '/update-subCategories',
    subCategoriesController.updatesubCategories
);

router.delete(
    '/delete-subCategories',
    subCategoriesController.deletesubCategories
);

module.exports = router;