const express = require('express');
const { variantController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-variants',
    variantController.listvariant
);

router.post(
    '/add-variants',
    variantController.addvariant
);

router.put(
    '/update-variants',
    variantController.updatevariant
);

router.delete(
    '/delete-variants',
    variantController.deletevariant
);

module.exports = router;