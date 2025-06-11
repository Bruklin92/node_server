const express = require('express');
const { userController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-User',
     userController.listuser
);

router.get(
    '/get-User/:id',
     userController.getuser
);

router.post(
    '/add-User', 
    userController.adduser
);

router.put(
    '/update-User/:id',
    userController.updateuser
);

router.delete(
    '/delete-User/:id',
    userController.deleteuser
);

router.get(
    '/SearchUser-User',
    userController.SearchUser
);

module.exports = router;