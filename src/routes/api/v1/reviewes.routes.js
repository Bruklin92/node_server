const express = require('express');
const { reviwesController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-reviewes',
    reviwesController.listreviwes
);

router.post(
    '/add-reviewes',
    reviwesController.addreviwes
);

router.put(
    '/update-reviewes',
    reviwesController.updatereviwes
);

router.delete(
    '/delete-reviewes',
    reviwesController.deletereviwes
 );

module.exports = router;