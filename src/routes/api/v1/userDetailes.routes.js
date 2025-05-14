const express = require('express');
const router = express.Router();

router.get('/list-User_Detailes', (req, res) => {
    res.send("list User_Detailes");
});

router.post('/add-User_Detailes', (req, res) => {
    res.send("add-User_Detailes");
});

router.put('/update-User_Detailes', (req, res) => {
    res.send("update User_Detailes");
});

router.delete('/delete-User_Detailes', (req, res) => {
    res.send("delete User_Detailes");
});

module.exports = router;