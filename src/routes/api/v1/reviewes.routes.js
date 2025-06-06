const express = require('express');
const { reviwesController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-reviewes',
    reviwesController.listreviwes
);

router.get(
    '/get-reviewes/:id',
    reviwesController.getreviwes
);

router.post(
    '/add-reviewes',
    reviwesController.addreviwes
);

router.put(
    '/update-reviewes/:id',
    reviwesController.updatereviwes
);

router.delete(
    '/delete-reviewes/:id',
    reviwesController.deletereviwes
 );

module.exports = router;