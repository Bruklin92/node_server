const express = require('express');
const { ordersController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-orders',
    ordersController.listorders
);
router.get(
    '/list-orders',
    ordersController.getorders
);

router.post(
    '/add-orders',
    ordersController.addorders
);

router.put(
    '/update-orders',
    ordersController.updateorders
);

router.delete(
    '/delete-orders',
    ordersController.deleteorders
);

module.exports = router;