const express = require('express');
const { cartsController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-categories',
    cartsController.listCarts
);
router.get(
    '/list-cart',
    cartsController.getcarts
);

router.post(
    '/add-cart',
    cartsController.addCarts
);

router.put(
    '/update-cart',
    cartsController.updatecarts
);

router.delete(
    '/delete-cart',
    cartsController.deletecarts
);

module.exports = router;