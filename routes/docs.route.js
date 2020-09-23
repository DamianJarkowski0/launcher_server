const express = require('express');
const path = require('path');
const router = express.Router();

/*
* apidoc -f \".*\\.js$\" -f \".*\\.ts$\" -i services -i routes -o doc/
* OR npm genDoc
* */
router.use('/', express.static(path.join(__dirname, '/../doc')));

module.exports = router;
