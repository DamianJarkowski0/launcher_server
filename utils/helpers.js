const {to} = require('await-to-js');
const pe = require('parse-error');
const logger = require('./logger');

module.exports.to = async (promise) => {
    const [err, res] = await to(promise);

    if (err) {
        return [pe(err)];
    }

    return [null, res];
};

module.exports.error = function (res, err, code) {
    if (err instanceof Object && err.message !== undefined) {
        err = err.message;
    }

    if (code !== undefined) {
        res.statusCode = code;
    } else {
        res.statusCode = 404;
    }

    return res.json({success: false, message: err});
};

module.exports.success = function (res, data, code) {
    const message = {success: true, message: ''};

    if (typeof data == 'object') {
        message.message = data;
    }

    if (typeof code !== 'undefined') {
        res.statusCode = code;
    }

    if (message.message === '') {
        message.message = data;
    }

    return res.json(message);
};

module.exports.throwError = function (message, log) {
    if (log === true) {
        logger.error(message);
    }

    throw new Error(message);
};

