const DB = require('../utils/databaseManager');

const createOrReport = (table, object, cb) => {
    return new Promise((resolve, reject) => {
        if ((table.name === 'permissionList' && object.name && object.type_id)
         || (table.name !== 'permissionList' && object.name)) {
            table.create(object)
                .then((result) => {
                    cb.push({
                        message: "CREATED",
                        id: result.id,
                        name: result.name,
                    });
                    resolve(cb);
                }).catch((err) => {
                    if (err.name === "SequelizeUniqueConstraintError") {
                        cb.push({message: "EXIST", name: object.name});
                        resolve(cb);
                    } else
                    if (err.name === "SequelizeForeignKeyConstraintError") {
                        cb.push({message: "TYPENOTFOUND", id: object.type_id});
                        resolve(cb);
                    }
                    reject(err);
                });
        } else {
            cb.push({message: "INVALIDOBJECT", object: object});
            resolve(cb);
        }
    });
};

module.exports.createOrReport = createOrReport;

const updateOrReport = (table, object, cb) => {
    return new Promise((resolve, reject) => {
        if ((table.name === 'permissionList' && object.name && object.type_id && object.id)
         || (table.name !== 'permissionList' && object.name && object.id)) {
            const clonedObj = {};

            Object.assign(clonedObj, object);

            delete clonedObj.id;
            table.update(clonedObj,{where: {id: object.id}})
                .then((result) => {
                    if (result[0] !== 0) {
                        cb.push({id: object.id, message: "UPDATED"});
                    } else {
                        cb.push({id: object.id, message: "NOTFOUND"});
                    }
                    resolve(cb);
                }).catch((err) => {
                    if (err.name === "SequelizeUniqueConstraintError") {
                        cb.push({message: "EXIST", name: object.name});
                        resolve(cb);
                    } else
                    if (err.name === "SequelizeForeignKeyConstraintError") {
                        cb.push({message: "TYPENOTFOUND", id: object.type_id});
                        resolve(cb);
                    }
                    reject(err);
                });
        } else {
            cb.push({message: "INVALIDOBJECT", object: object});
            resolve(cb);
        }
    });
};

module.exports.updateOrReport = updateOrReport;

const getAll = (table) => {
    return new Promise((resolve) => {
        const result = [];
        let include = [];

        if (table.name === 'permissionList') {
            include = [{
                model: DB.permTypesModel,
                as: 'type',
                attributes: ['id'],
            }];
        }
        table.findAll({
            include: include,
            attributes: ['id', 'name'],
            order: [['id','ASC']],
        }).then((list) => {
            list.forEach((object) => {
                result.push(object);
            });
            resolve(result);
        });
    });
};

module.exports.getAll = getAll;

const addOrUpdateGroupPerm = (groups, object, cb, options) => {
    return new Promise((resolve, reject) => {
        if (object.id === undefined || object.active === undefined) {
            cb.push({
                object: object,
                message: 'INVALIDOBJECT',
            });
            resolve(cb);
        } else {
            groups.findOne({where: {id: options.id}}).then((group) => {
                if (group) {
                    DB.permListModel.findOne({where: {id: object.id}})
                        .then((perm) => {
                            if (perm) {
                                group.addPermission(perm,
                                    {through: {active: object.active}})
                                    .then((res) => {
                                        if (res) {
                                            cb.push({
                                                group_id: group.id,
                                                group_name: group.name,
                                                permission_id: perm.id,
                                                permission_name: perm.name,
                                                activate: object.active,
                                                message: 'UPDATED',
                                            });
                                        } else {
                                            cb.push({
                                                group_id: options.id,
                                                permission_id: object.id,
                                                activate: object.active,
                                                message: 'ERROR',
                                            });
                                        }
                                        resolve(cb);
                                    });
                            } else {
                                cb.push({
                                    id: object.id,
                                    message: 'PERMISSIONNOTFOUND',
                                });
                                resolve(cb);
                            }
                        });
                } else {
                    cb.push({
                        id: options.id,
                        message: 'GROUPNOTFOUND',
                    });
                    resolve(cb);
                }
            });
        }
    });
};

module.exports.addOrUpdateGroupPerm = addOrUpdateGroupPerm;

const returnGroupsWithPermissions = (table) => {
    return new Promise((resolve) => {
        const result = [];
        const include = [{
            model: DB.permListModel,
            as: 'permission',
            attributes: ['id','name'],
            through: {as: 'opt', attributes: ['active']},
        }];

        table.findAll({
            include: include,
            attributes: ['id', 'name'],
            order: [['id','ASC']],
        }).then((list) => {
            list.forEach((object) => {
                result.push(object);
            });
            resolve(result);
        });
    });
};

module.exports.returnGroupsWithPermissions = returnGroupsWithPermissions;

const updateUserGroup = (req) => {
    return new Promise((resolve, reject) => {
        if (req.body.user !== undefined && req.body.group) {
            const uid = req.body.user;
            const gid = req.body.group;

            DB.userModel.findOne({where: {id: uid}}).then((user) => {
                if (user) {
                    DB.permGroupsModel.findOne({where: {id: gid}})
                        .then((group) => {
                            if (group) {
                                user.setGroup(group.id).then((update) => {
                                    if (update) {
                                        resolve({message: "GROUPUPDATED"});
                                    } else {
                                        resolve({message: "GROUPNOTUPDATED"});
                                    }
                                });
                            } else {
                                resolve({id: gid, message: "GROUPNOTFOUND"});
                            }
                        });
                } else {
                    resolve({id: uid, message: "USERNOTFOUND"});
                }
            });
        } else {
            resolve({message: "INVALIDOBJECT", object: req.body});
        }
    });
};

module.exports.updateUserGroup = updateUserGroup;

const addOrUpdateUserPerm = (users, object, cb, options) => {
    return new Promise((resolve, reject) => {
        if (object.id === undefined || object.active === undefined) {
            cb.push({
                object: object,
                message: 'INVALIDOBJECT',
            });
            resolve(cb);
        } else {
            users.findOne({where: {id: options.id}}).then((user) => {
                if (user) {
                    DB.permListModel.findOne({where: {id: object.id}})
                        .then((perm) => {
                            if (perm) {
                                user.addPermission(perm,
                                    {through: {active: object.active}})
                                    .then((res) => {
                                        if (res) {
                                            cb.push({
                                                user_id: user.id,
                                                user_name: user.name,
                                                permission_id: perm.id,
                                                permission_name: perm.name,
                                                activate: object.active,
                                                message: 'UPDATED',
                                            });
                                        } else {
                                            cb.push({
                                                user_id: options.id,
                                                permission_id: object.id,
                                                activate: object.active,
                                                message: 'ERROR',
                                            });
                                        }
                                        resolve(cb);
                                    });
                            } else {
                                cb.push({
                                    id: object.id,
                                    message: 'PERMISSIONNOTFOUND',
                                });
                                resolve(cb);
                            }
                        });
                } else {
                    cb.push({
                        id: options.id,
                        message: 'GROUPNOTFOUND',
                    });
                    resolve(cb);
                }
            });
        }
    });
};

module.exports.addOrUpdateUserPerm = addOrUpdateUserPerm;

const returnUserPermissions = (user) => {
    return new Promise((resolve) => {
        let result = [];
        const include = [{
            model: DB.permListModel,
            as: 'permission',
            attributes: ['id','name'],
            through: {as: 'opt', attributes: ['active']},
        }];

        DB.permGroupsModel.findOne({
            where: {id: user.group_id},
            include: include,
            attributes: ['id','name'],
        }).then((list) => {
            if (list) {
                list.permission.forEach((object) => {
                    if (object.opt.active) {
                        result.push(object.name);
                    }
                });
            }
        }).then(() => {
            user.getPermissions().then((perm) => {
                perm.forEach((object) => {
                    if (object.userPermission.active) {
                        result.push(object.name);
                    } else {
                        result = result.filter((item) => item !== object.name);
                    }
                });
                resolve(result);
            });
        });
    });
};

module.exports.returnUserPermissions = returnUserPermissions;

const hasPermission = async (user, permission) => {
    return new Promise((resolve) => {
        let hasPermission = true;

        if (!user) {
            hasPermission = false;
        }
        if (!permission) {
            hasPermission = false;
        }

        returnUserPermissions(user).then((list) => {
            if (list.indexOf(permission) === -1) {
                hasPermission = false;
            }
            resolve(hasPermission);
        });
    });
};

module.exports.hasPermission = hasPermission;

const deleteObject = (table, object, cb) => {
    return new Promise((resolve, reject) => {
        if (object.id) {
            table.findOne({where: {id: object.id}}).then((toDelete) => {
                if (toDelete) {
                    return toDelete.destroy();
                } else {
                    cb.push({id: object.id, message: "NOTFOUND"});
                }
                resolve(cb);
            }).then((deletedObject) => {
                if (deletedObject) {
                    cb.push({id: deletedObject.id, message: "DELETED"});
                }
                resolve(cb);
            });
        } else {
            cb.push({message: "INVALIDOBJECT", object: object});
            resolve(cb);
        }
    });
};

module.exports.deleteObject = deleteObject;
