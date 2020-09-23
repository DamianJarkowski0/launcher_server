const {success, error} = require('../utils/helpers');
const {forEachPromise} = require('../utils');
const permission = require('../services/permission.service');
const DB = require('../utils/databaseManager');

const getTypes = async (req, res) => {
    permission.getAll(DB.permTypesModel).then((list) => {
        return success(res,list,200);
    }).catch((err) => {
        return error(res, err, err.code);
    });
};

module.exports.getTypes = getTypes;

const addType = async (req, res) => {
    forEachPromise(permission.createOrReport, req.body, DB.permTypesModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.addType = addType;

const updateType = async (req, res) => {
    forEachPromise(permission.updateOrReport, req.body, DB.permTypesModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.updateType = updateType;

const deleteType = async (req, res) => {
    forEachPromise(permission.deleteObject, req.body, DB.permTypesModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.deleteType = deleteType;

const getGroups = async (req, res) => {
    permission.getAll(DB.permGroupsModel).then((list) => {
        return success(res,list,200);
    }).catch((err) => {
        return error(res, err, err.code);
    });
};

module.exports.getGroups = getGroups;

const addGroup = async (req, res) => {
    forEachPromise(permission.createOrReport, req.body, DB.permGroupsModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.addGroup = addGroup;

const updateGroup = async (req, res) => {
    forEachPromise(permission.updateOrReport, req.body, DB.permGroupsModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.updateGroup = updateGroup;

const deleteGroup = async (req, res) => {
    forEachPromise(permission.deleteObject, req.body, DB.permGroupsModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.deleteGroup = deleteGroup;

const getPermissionList = async (req, res) => {
    permission.getAll(DB.permListModel).then((list) => {
        return success(res,list,200);
    }).catch((err) => {
        return error(res, err, err.code);
    });
};

module.exports.getPermissionList = getPermissionList;

const addPermission = async (req, res) => {
    forEachPromise(permission.createOrReport, req.body, DB.permListModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.addPermission = addPermission;

const updatePermission = async (req, res) => {
    forEachPromise(permission.updateOrReport, req.body, DB.permListModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.updatePermission = updatePermission;

const deletePermission = async (req, res) => {
    forEachPromise(permission.deleteObject, req.body, DB.permListModel)
        .then((result) => {
            return success(res,result,200);
        }).catch((err) => {
            return error(res, err, err.code);
        });
};

module.exports.deletePermission = deletePermission;

const updatePermissionInGroup = async (req, res) => {
    const promise = [];

    for (const group in req.body) {
        const options = {id: group};

        promise[group] = forEachPromise(
            permission.addOrUpdateGroupPerm,
            req.body[group],
            DB.permGroupsModel,
            options,
        ).catch((err) => {
            console.log(`error ${err}`);
        });
    }

    Promise.all(promise).then((result) => {
        result = result.filter(function (el) {
            return el != null && el != "";
        });

        return success(res,result,200);
    });
};

module.exports.updatePermissionInGroup = updatePermissionInGroup;

const getGroupsWithPermissions = async (req, res) => {
    permission.returnGroupsWithPermissions(DB.permGroupsModel).then((list) => {
        return success(res,list,200);
    }).catch((err) => {
        return error(res, err, err.code);
    });
};

module.exports.getGroupsWithPermissions = getGroupsWithPermissions;

const updateUserGroup = async (req, res) => {
    permission.updateUserGroup(req).then((result) => {
        return success(res,result,200);
    }).catch((err) => {
        return error(res, err, err.code);
    });
};

module.exports.updateUserGroup = updateUserGroup;

const updateUserPermission = async (req, res) => {
    const options = {id: Object.keys(req.body)[0]};

    forEachPromise(
        permission.addOrUpdateUserPerm,
        req.body[options.id],
        DB.userModel,
        options,
    ).then((result) => {
        success(res,result,200);
    }).catch((err) => {
        error(res, err, err.code);
    });
};

module.exports.updateUserPermission = updateUserPermission;

const getUserPermissions = async (req, res) => {
    if (req.params.user) {
        DB.userModel.findOne({where: {username: req.params.user}})
            .then((user) => {
                if (user) {
                    permission.returnUserPermissions(user).then((list) => {
                        success(res,list,200);
                    }).catch((err) => {
                        error(res, err, err.code);
                    });
                } else {
                    error(res, {message: 'USERNOTFOUND'}, 404);
                }
            });
    }
};

module.exports.getUserPermissions = getUserPermissions;

