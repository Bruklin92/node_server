const express = require('express');
const { userController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-User_Detailes',
     userController.listuser
);

router.post(
    '/add-User_Detailes', 
    userController.adduser
);

router.put(
    '/update-User_Detailes',
    userController.updateuser
);

router.delete(
    '/delete-User_Detailes',
    userController.deleteuser
);

module.exports = router;