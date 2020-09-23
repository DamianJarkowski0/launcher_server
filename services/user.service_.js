const DB = require('../utils/databaseManager');
const {returnUserPermissions} = require('../services/permission.service');
const {to} = require('../utils/helpers');

const getUserDataAsJson = async function (username) {
    return new Promise((resolve) => {
        let result = {};

        DB.userModel.findOne({
            where: {username: username},
            attributes: ['id', 'username', 'email', 'group_id'],
        }).then(async (user) => {
            result = user.dataValues;
            const [err, permission] = await to(returnUserPermissions(user));

            if (err) {
                throw err;
            }

            if (permission) {
                result.permission = permission;
            }

            resolve(result);
        });
    });
};

module.exports.getUserDataAsJson = getUserDataAsJson;

const getUsersList = async function () {
    return new Promise((resolve) => {
        DB.userModel.findAll({attributes: ['id', 'username', 'email', 'group_id']})
            .then(async (user) => {
                resolve(user);
            });
    });
};

module.exports.getUsersList = getUsersList;

const getLastUsersUpdateDateTime = async function () {
    return new Promise((resolve) => {
        DB.userModel.findOne({order: [['updated_at', 'DESC']],attributes: ['updated_at']})
            .then(async (obj) => {
                resolve(obj);
            });
    });
};

module.exports.getLastUsersUpdateDateTime = getLastUsersUpdateDateTime;
