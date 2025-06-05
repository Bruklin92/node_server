const express = require('express');
const { paymentsController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-payments',
    paymentsController.listpayments
);
router.get(
    '/list-payments',
    paymentsController.getpayments
);

router.post(
    '/add-payments',
    paymentsController.addpayments
);

router.put(
    '/update-payments',
    paymentsController.updatepayments
);

router.delete(
    '/delete-payments',
    paymentsController.deletepayments
);

module.exports = router;