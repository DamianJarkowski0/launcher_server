const express = require('express');
const router = express.Router();
const {authorize} = require('../controllers');

const PermissionController = require('../controllers/permission.controller');

router.get('/', function (req, res, next) {
    res.json({success: true, message: "online"});
});

router.get('/type/get',
    authorize("PERM_TYPES_READ"),
    PermissionController.getTypes);

router.post('/type/add',
    authorize("PERM_TYPES_MODIFY"),
    PermissionController.addType);

router.put('/type/update',
    authorize("PERM_TYPES_MODIFY"),
    PermissionController.updateType);

router.delete('/type/delete',
    authorize("PERM_TYPES_DELETE"),
    PermissionController.deleteType);

router.get('/group/get',
    authorize("PERM_GROUP_READ"),
    PermissionController.getGroups);

router.post('/group/add',
    authorize("PERM_GROUP_MODIFY"),
    PermissionController.addGroup);

router.put('/group/update',
    authorize("PERM_GROUP_MODIFY"),
    PermissionController.updateGroup);

router.delete('/group/delete',
    authorize("PERM_GROUP_DELETE"),
    PermissionController.deleteGroup);

router.get('/list/get',
    authorize("PERM_LIST_READ"),
    PermissionController.getPermissionList);

router.post('/list/add',
    authorize("PERM_LIST_MODIFY"),
    PermissionController.addPermission);

router.put('/list/update',
    authorize("PERM_LIST_MODIFY"),
    PermissionController.updatePermission);

router.delete('/list/delete',
    authorize("PERM_LIST_DELETE"),
    PermissionController.deletePermission);

router.get('/getUserPermissions/:user',
    authorize("PERM_USER_READ"),
    PermissionController.getUserPermissions);

router.get('/getGroupsWithPermissions',
    authorize("PERM_GROUP_READ"),
    PermissionController.getGroupsWithPermissions);

router.post('/updatePermissionInGroup',
    authorize("PERM_GROUP_MODIFY"),
    PermissionController.updatePermissionInGroup);

router.post('/updateUserPermission',
    authorize("PERM_USER_MODIFY"),
    PermissionController.updateUserPermission);

router.post('/updateUserGroup',
    authorize("PERM_USER_GROUP_MODIFY"),
    PermissionController.updateUserGroup);

module.exports = router;
