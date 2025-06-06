const express = require('express');
const { paymentsController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-payments',
    paymentsController.listpayments
);
router.get(
    '/get-payments/:id',
    paymentsController.getpayments
);

router.post(
    '/add-payments',
    paymentsController.addpayments
);

router.put(
    '/update-payments/:id',
    paymentsController.updatepayments
);

router.delete(
    '/delete-payments/:id',
    paymentsController.deletepayments
);

module.exports = router;