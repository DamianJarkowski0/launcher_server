'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const logger = require('../utils/logger');
const config = require('config');
const chalk = require('chalk');

const database = config.get('DATABASES');

const sequelize = {};
const db = {};
const models = {};

database.forEach((DB) => {
    models[DB.NAME] = {};

    const connection = new Sequelize(DB.NAME,DB.USER,DB.PASSWORD,{
        host: DB.HOST,
        dialect: DB.DIALECT,
        port: DB.PORT,
        benchmark: true,
        logging: ((config.get('ENV') === 'DEV') ? console.log : false),
    });

    sequelize[DB.NAME] = connection;
    loadModels(__dirname,connection,sequelize,models,DB);

    Object.keys(models[DB.NAME]).forEach(function (modelName) {
        if ('associate' in models[DB.NAME][modelName]) {
            models[DB.NAME][modelName].associate(sequelize[DB.NAME].models);
        }
    });
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

// eslint-disable-next-line require-jsdoc
function loadModels(dir,connection,sequelize,models,DB) {
    fs.readdirSync(dir)
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file !== 'index.js');
        })
        .forEach(function (file) {
            if (fs.lstatSync(`${dir}/${file}`).isDirectory()) {
                loadModels(`${dir}/${file}`,connection,sequelize,models,DB);
            } else {
                try {
                    const model = connection.import(path.join(dir, file));

                    sequelize[model.name] = model;
                    models[DB.NAME][model.name] = model;
                    logger.debug(chalk`Model {yellow ${model.name}} from file {yellow ${file}} creation successfull.
                    Using schema {yellow ${DB.NAME}}`);
                } catch (error) {
                    logger.error(chalk`Model {yellow ${file}} creation error: ${error}`);
                }
            }
        });
}
