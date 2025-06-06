const express = require('express');
const { ordersController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-orders',
    ordersController.listorders
);
router.get(
    '/get-orders/:id',
    ordersController.getorders
);

router.post(
    '/add-orders',
    ordersController.addorders
);

router.put(
    '/update-orders/:id',
    ordersController.updateorders
);

router.delete(
    '/delete-orders/:id',
    ordersController.deleteorders
);

module.exports = router;