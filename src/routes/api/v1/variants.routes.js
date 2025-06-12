const express = require('express');
const { variantController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-variants',
    variantController.listvariant
);

router.get(
    '/get-variants/:id',
    variantController.getvariant
);

router.post(
    '/add-variants',
    variantController.addvariant
);

router.put(
    '/update-variants/:id',
    variantController.updatevariant
);

router.delete(
    '/delete-variants/:id',
    variantController.deletevariant
);

router.get(
    '/countVariant-variants',
    variantController.countVariant
);

router.get(
    '/listproduct-variants/:id',
    variantController.listvariantsProduct
);
module.exports = router;