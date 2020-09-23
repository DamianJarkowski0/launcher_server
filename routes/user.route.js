const express = require('express');
const router = express.Router();
const {authorize} = require('../controllers');
const userController = require('../controllers/user.controller_');

router.get('/', function (req, res, next) {
    res.json({success: true, message: "online"});
});

router.get('/get/:user',
    authorize("USER_GET"),
    userController.getUser);

router.get('/list',
    authorize("USER_GET"),
    userController.getUsersList);

module.exports = router;

router.get('/list/lastupdate',
    authorize("USER_GET"),
    userController.getLastUsersUpdateDateTime);

module.exports = router;
