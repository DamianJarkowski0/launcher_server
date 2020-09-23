const models = require('../models');
const config = require('config');

export const permTypesModel
    = models.sequelize[config.get('MAINDATABASE')].models.permissionTypes;
export const permListModel
    = models.sequelize[config.get('MAINDATABASE')].models.permissionList;
export const permGroupsModel
    = models.sequelize[config.get('MAINDATABASE')].models.permissionGroups;
export const groupPermissionModel
    = models.sequelize[config.get('MAINDATABASE')].models.groupPermission;
export const userPermissionModel
    = models.sequelize[config.get('MAINDATABASE')].models.userPermission;
export const userModel
    = models.sequelize[config.get('MAINDATABASE')].models.users;
