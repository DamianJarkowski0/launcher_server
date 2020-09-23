const {success} = require('../utils/helpers');
const User = require('../services/user.service_');

const getUser = async (req, res) => {
    User.getUserDataAsJson(req.params.user).then((user) => {
        return success(res,user,200);
    });
};

module.exports.getUser = getUser;

const getUsersList = async (req, res) => {
    User.getUsersList().then((user) => {
        return success(res,user,200);
    });
};

module.exports.getUsersList = getUsersList;

const getLastUsersUpdateDateTime = async (req, res) => {
    User.getLastUsersUpdateDateTime().then((obj) => {
        return success(res,obj,200);
    });
};

module.exports.getLastUsersUpdateDateTime = getLastUsersUpdateDateTime;
