const express = require('express');
const { cartsController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-categories',
    cartsController.listCarts
);
router.get(
    '/get-cart/:id',
    cartsController.getcarts
);

router.post(
    '/add-cart',
    cartsController.addCarts
);

router.put(
    '/update-cart/:id',
    cartsController.updatecarts
);

router.delete(
    '/delete-cart/:id',
    cartsController.deletecarts
);

module.exports = router;