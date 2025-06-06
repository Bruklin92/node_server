const express = require('express');
const { offeresController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-offeres',
    offeresController.listOfferes
);
router.get(
    '/get-offeres/:id',
    offeresController.getofferes
);

router.post(
    '/add-offeres',
    offeresController.addOfferes
);

router.put(
    '/update-offeres/:id',
    offeresController.updateofferes
);

router.delete(
    '/delete-offeres/:id',
    offeresController.deleteofferes
);

module.exports = router;