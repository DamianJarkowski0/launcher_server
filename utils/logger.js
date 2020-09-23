'use strict';
//Configs
const opts = {
    logDirectory: `${__dirname}/../log`,
    fileNamePattern: 'server-<date>.log',
    dateFormat: 'MM.DD.YYYY',
};
const timeFormat = {
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
};

//Imports
const config = require('config');
const chalk = require('chalk');
const log = require('simple-node-logger').createRollingFileLogger(opts);
const env = config.get("ENV");

((env === 'DEV') ? log.setLevel('debug') : null);

const appendConsoleLog = (color, level, message) => {
    const timeString = new Intl.DateTimeFormat('en-US', timeFormat).format(new Date());

    console.info(chalk`${timeString} {${color} ${level}} ${message}`);
};

/**
 * Append INFO message to file and console
 * @param {string} message Message witch should be show.
 * @param {boolean} dev If true, log only for DEV env.
 * @returns {void}
 */
module.exports.info = function (message, dev) {
    if (dev) {
        if (env === 'DEV') {
            appendConsoleLog('yellowBright','INFO ', message);
            log.info(message);
        }
    } else {
        appendConsoleLog('yellowBright','INFO ', message);
        log.info(message);
    }
};

/**
 * Append WARN message to file and console
 * @param {string} message Message witch should be show.
 * @param {boolean} dev If true, log only for DEV env.
 * @returns {void}
 */
module.exports.warn = function (message, dev) {
    if (dev) {
        if (env === 'DEV') {
            appendConsoleLog('rgb(255,255,0)','WARN ', message);
            log.warn(message);
        }
    } else {
        appendConsoleLog('rgb(255,255,0)','WARN ', message);
        log.warn(message);
    }
};

/**
 * Append ERROR message to file and console
 * @param {string} message Message witch should be show.
 * @param {boolean} dev If true, log only for DEV env.
 * @returns {void}
 */
module.exports.error = function (message, dev) {
    if (dev) {
        if (env === 'DEV') {
            appendConsoleLog('redBright','ERROR', message);
            log.error(message);
        }
    } else {
        appendConsoleLog('redBright','ERROR', message);
        log.error(message);
    }
};

/**
 * Append TRACE message to file and console
 * @param {string} message Message witch should be show.
 * @param {boolean} dev If true, log only for DEV env.
 * @returns {void}
 */
module.exports.trace = function (message, dev) {
    if (dev) {
        if (env === 'DEV') {
            appendConsoleLog('gray','TRACE', message);
            log.trace(message);
        }
    } else {
        appendConsoleLog('gray','TRACE', message);
        log.trace(message);
    }
};

/**
 * Append DEBUG message to file and console. Only for DEV env.
 * @param {string} message Message witch should be show.
 * @returns {void}
 */
module.exports.debug = function (message) {
    if (env === 'DEV') {
        appendConsoleLog('blueBright','DEBUG', message);
        log.debug(message);
    }
};

/**
 * Append FATAL message to file and console
 * @param {string} message Message witch should be show.
 * @returns {void}
 */
module.exports.fatal = function (message) {
    if (dev) {
        if (env === 'DEV') {
            appendConsoleLog('red','FATAL', message);
            log.fatal(message);
        }
    } else {
        appendConsoleLog('red','FATAL', message);
        log.fatal(message);
    }
};
