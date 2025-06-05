const express = require('express');
const { offeresController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-offeres',
    offeresController.listOfferes
);
router.get(
    '/list-offeres',
    offeresController.getofferes
);

router.post(
    '/add-offeres',
    offeresController.addOfferes
);

router.put(
    '/update-offeres',
    offeresController.updateofferes
);

router.delete(
    '/delete-offeres',
    offeresController.deleteofferes
);

module.exports = router;