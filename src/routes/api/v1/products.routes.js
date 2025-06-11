const express = require('express');
const { productsController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-products',
    productsController.listproducts
);
router.get(
    '/get-products/:id',
    productsController.getproducts
);

router.post(
    '/add-products',
    productsController.addproducts
);

router.put(
    '/update-products/:id',
    productsController.updateproducts
);

router.delete(
    '/delete-products/:id',
    productsController.deleteproducts
);

router.get(
    '/novariants-products',
    productsController.NoVariant
);

router.get(
    '/ListReviwe-products',
    productsController.ListReviwe
);

router.get(
    '/name-products/?name',
    productsController.NameSearch
);

module.exports = router;