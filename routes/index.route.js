const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.json({success: true, message: "online"});
});
module.exports = router;

router.get('/authorizationfailed', function (req, res) {
    res.status(401).json({success: false, message: "AUTHORIZATION_FAILED"});
});
module.exports = router;
