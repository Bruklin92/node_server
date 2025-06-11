const express = require('express');
const { subCategoriesController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-subCategories',
    subCategoriesController.listsubCategories
);

router.get(
    '/get-subCategories/:id',
    subCategoriesController.getsubCategories
);

router.post(
    '/add-subCategories', 
    subCategoriesController.addsubCategories
);

router.put(
    '/update-subCategories/:id',
    subCategoriesController.updatesubCategories
);

router.delete(
    '/delete-subCategories/:id',
    subCategoriesController.deletesubCategories
);

router.get(
    '/parant-subCategories/:id',
    subCategoriesController.parantCategory
);

router.get(
    '/active-subCategories',
    subCategoriesController.ActivesubCategories
);

router.get(
    '/totalProducts-subCategories',
    subCategoriesController.totalProducts
);

router.get(
    '/InActive-subCategories',
    subCategoriesController.inActiveSubCategory
);

router.get(
    '/productCount-subCategories',
    subCategoriesController.productCount
);

router.get(
    '/InactiveProduct-subCategories',
    subCategoriesController.InactiveProduct
);


module.exports = router;