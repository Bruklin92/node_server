const express = require('express');
const { productsController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-products',
    productsController.listproducts
);
router.get(
    '/list-products',
    productsController.getproducts
);

router.post(
    '/add-products',
    productsController.addproducts
);

router.put(
    '/update-products',
    productsController.updateproducts
);

router.delete(
    '/delete-products',
    productsController.deleteproducts
);

module.exports = router;