/**
 * @api {get} /permission/type/get 1.1 Get permission type list
 * @apiPermission JWT/PERM_TYPES_READ
 *
 * @apiName getTypes
 * @apiGroup 2.Permission
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of <code>type</code> object
 * @apiSuccess {Number} message.id return <code>id</code> of <code>type</code> object in DB
 * @apiSuccess {Strings} message.name return <code>name</code> of <code>type</code> object in DB
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "name": "Permission"
 *     },
 *     {
 *       "id": 2,
 *       "name": "Administration"
 *     }
 *   ]
 * }
 */

/**
 * @api {post} /permission/type/add 1.2 Add permission type
 * @apiPermission JWT/PERM_TYPES_MODIFY
 *
 * @apiName addType
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {String} Array.Object.Name Name of new type
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"name": "Basic"
 * 	},
 * 	{
 * 		"name": "Permission"
 * 	}
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>EXIST</code> if type exist or <code>CREATED</code> if type is added correctly
 * @apiSuccess {String} [message.id] return <code>id</code> new type
 * @apiSuccess {String} message.name returns the name of the type that has been added
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "message": "EXIST",
 *       "name": "Basic"
 *     },
 *     {
 *       "message": "CREATED",
 *       "id": 5,
 *       "name": "Permission"
 *     }
 *   ]
 * }
 */

/**
 * @api {put} /permission/type/update 1.3 Update permission type
 * @apiPermission JWT/PERM_TYPES_MODIFY
 *
 * @apiName updateType
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {Number} Array.Object.id Id which type should be updated
 * @apiParam {String} Array.Object.Name New type name
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"id": 1,
 * 		"name": "test1"
 * 	},
 * 	{
 * 		"id": 47,
 * 		"name": "test2"
 * 	},
 * 	{
 * 		"id": 48,
 * 		"namee": "test3"
 * 	}
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>UPDATED</code> if type is updated correctly, <code>NOTFOUND</code> if type not exist or
 * <code>INVALIDOBJECT</code> if put incorrect object.
 * @apiSuccess {Number} message.id return <code>id</code> our type (if object is valid)
 * @apiSuccess {Object} [message.object] return invalid <code>object</code>
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "message": "UPDATED"
 *     },
 *     {
 *       "id": 47,
 *       "message": "NOTFOUND"
 *     },
 *     {
 *       "message": "INVALIDOBJECT",
 *       "object": {
 *         "id": 48,
 *         "namee": "terstvxcvzcvcxzcv56"
 *       }
 *     }
 *   ]
 * }
 */

/**
 * @api {DELETE} /permission/type/delete 1.4 Delete permission type
 * @apiPermission JWT/PERM_TYPES_DELETE
 *
 * @apiName deleteType
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {Number} Array.Object.id Id which type should be removed
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"id": 1
 * 	}
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>REMOVED</code> if type is removed correctly, <code>NOTFOUND</code> if type not exist or
 * <code>INVALIDOBJECT</code> if put incorrect object.
 * @apiSuccess {Object} [message.object] return invalid <code>object</code>
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "message": "REMOVED"
 *     }
 *   ]
 * }
 */

/**
 * @api {get} /permission/group/get 2.1 Get permission groups list
 * @apiPermission JWT/PERM_GROUP_READ
 *
 * @apiName getGroups
 * @apiGroup 2.Permission
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of <code>groups</code> object
 * @apiSuccess {Number} message.id return <code>id</code> of <code>group</code> object in DB
 * @apiSuccess {Strings} message.name return <code>name</code> of <code>group</code> object in DB
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "name": "User"
 *     },
 *     {
 *       "id": 2,
 *       "name": "Moderator"
 *     },
 *     {
 *       "id": 5,
 *       "name": "Administrator"
 *     }
 *   ]
 * }
 */

/**
 * @api {post} /permission/group/add 2.2 Add permission group
 * @apiPermission JWT/PERM_GROUP_MODIFY
 *
 * @apiName addGroup
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {String} Array.Object.Name Name of new group
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"name": "User"
 * 	},
 * 	{
 * 		"name": "Admin"
 * 	}
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>EXIST</code> if group exist or <code>CREATED</code> if group is added correctly
 * @apiSuccess {String} [message.id] return <code>id</code> new group
 * @apiSuccess {String} message.name returns the name of the group that has been added
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "message": "EXIST",
 *       "name": "User"
 *     },
 *     {
 *       "message": "CREATED",
 *       "id": 2,
 *       "name": "Administrator"
 *     }
 *   ]
 * }
 */

/**
 * @api {put} /permission/group/update 2.3 Update permission group
 * @apiPermission JWT/PERM_GROUP_MODIFY
 *
 * @apiName updateGroup
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {Number} Array.Object.id Id which group should be updated
 * @apiParam {String} Array.Object.Name New group name
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"id": 1,
 * 		"name": "User"
 * 	},
 * 	{
 * 		"id": 3,
 * 		"name": "Admin"
 * 	},
 * 	{
 * 		"id": 2,
 * 		"namee": "Moderator"
 * 	}
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>UPDATED</code> if group is updated correctly, <code>NOTFOUND</code> if group not exist or
 * <code>INVALIDOBJECT</code> if put incorrect object.
 * @apiSuccess {Number} message.id return <code>id</code> our group (if object is valid)
 * @apiSuccess {Object} [message.object] return invalid <code>object</code>
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "message": "UPDATED"
 *     },
 *     {
 *       "id": 3,
 *       "message": "NOTFOUND"
 *     },
 *     {
 *       "message": "INVALIDOBJECT",
 *       "object": {
 *         "id": 2,
 *         "namee": "Moderator"
 *       }
 *     }
 *   ]
 * }
 */

/**
 * @api {DELETE} /permission/group/delete 2.4 Delete permission group
 * @apiPermission JWT/PERM_GROUP_DELETE
 *
 * @apiName deleteGroup
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {Number} Array.Object.id Id which group should be removed
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"id": 1
 * 	}
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>REMOVED</code> if group is removed correctly, <code>NOTFOUND</code> if group not exist or
 * <code>INVALIDOBJECT</code> if put incorrect object.
 * @apiSuccess {Object} [message.object] return invalid <code>object</code>
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "message": "REMOVED"
 *     }
 *   ]
 * }
 */

/**
 * @api {get} /permission/group/get 3.1 Get permission list with types
 * @apiPermission JWT/PERM_LIST_READ
 *
 * @apiName getPermissionList
 * @apiGroup 2.Permission
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of <code>permissions</code> object
 * @apiSuccess {Number} message.id return <code>id</code> of <code>permission</code> object in DB
 * @apiSuccess {Strings} message.name return <code>name</code> of <code>permission</code> object in DB
 * @apiSuccess {Object} message.type What type is permission
 * @apiSuccess {Number} message.type.id return <code>id</code> of <code>type</code> object in DB
 * @apiSuccess {Strings} message.type.name return <code>name</code> of <code>type</code> object in DB
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "name": "TYPES_READ",
 *       "type": {
 *         "id": 1,
 *         "name": "Basic"
 *       }
 *     },
 *     {
 *       "id": 2,
 *       "name": "perm_2",
 *       "type": {
 *         "id": 1,
 *         "name": "Basic"
 *       }
 *     }
 *   ]
 * }
 */

/**
 * @api {post} /permission/list/add 3.2 Add permission
 * @apiPermission JWT/PERM_LIST_MODIFY
 *
 * @apiName addPermission
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {String} Array.Object.Name Name of new permission
 * @apiParam {Number} Array.Object.type_id The type id to which the permission will belong
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"name": "perm_1",
 * 		"type_id": 1
 * 	},
 * 	{
 * 		"name": "perm_2",
 * 		"type_id": 1
 *  }
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>EXIST</code> if permission exist, <code>CREATED</code> if group is added correctly or
 * <code>TYPENOTFOUND</code> when type with type_id not exist.
 * @apiSuccess {String} [message.id] return new permission <code>id</code> or type <code>id</code> when it does not exist
 * @apiSuccess {String} message.name returns the name of the permission that has been added
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "message": "EXIST",
 *       "name": "perm_1"
 *     },
 *     {
 *       "message": "TYPENOTFOUND",
 *       "id": 2
 *     },
 *     {
 *       "message": "CREATED",
 *       "id": 17,
 *       "name": "perm3"
 *     }
 *   ]
 * }
 */

/**
 * @api {put} /permission/list/update 3.3 Update permission
 * @apiPermission JWT/PERM_LIST_MODIFY
 *
 * @apiName updatePermission
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {Number} Array.Object.id Id which permission should be updated
 * @apiParam {String} Array.Object.Name New permission name
 * @apiParam {Number} Array.Object.type_id Type id, if updated if is not the same as currently
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"id": 2,
 * 		"name": "perm33",
 * 		"type_id": 1
 * 	},
 * 	{
 * 		"id": 3,
 * 		"name": "perm",
 * 		"type_id": 2
 * 	},
 * 	{
 * 		"id": 999,
 * 		"name": "perm999",
 * 		"type_id": 1
 * 	},
 * 	{
 * 		"id": 2,
 * 		"name": "perm1"
 * 	}
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>UPDATED</code> if permission is updated correctly, <code>NOTFOUND</code> if permission not exist,
 * <code>TYPENOTFOUND</code> if permission type not exist or <code>INVALIDOBJECT</code> if put incorrect object.
 * @apiSuccess {Number} message.id return <code>id</code> our permission (if object is valid)
 * @apiSuccess {Object} [message.object] return invalid <code>object</code>
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 2,
 *       "message": "UPDATED"
 *     },
 *     {
 *       "message": "TYPENOTFOUND",
 *       "id": 2
 *     },
 *     {
 *       "id": 999,
 *       "message": "NOTFOUND"
 *     },
 *     {
 *       "message": "INVALIDOBJECT",
 *       "object": {
 *         "id": 2,
 *         "name": "perm1"
 *       }
 *     }
 *   ]
 * }
 */

/**
 * @api {DELETE} /permission/list/delete 3.4 Delete permission
 * @apiPermission JWT/PERM_PERMISSION_DELETE
 *
 * @apiName deletePermission
 * @apiGroup 2.Permission
 *
 * @apiParam {Object[]} Array
 * @apiParam {Object} Array.Object
 * @apiParam {Number} Array.Object.id Id which permission should be removed
 * @apiParamExample {json} Request-Example:
 * [
 * 	{
 * 		"id": 1
 * 	}
 * ]
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>REMOVED</code> if permission is removed correctly, <code>NOTFOUND</code> if permission not exist or
 * <code>INVALIDOBJECT</code> if put incorrect object.
 * @apiSuccess {Object} [message.object] return invalid <code>object</code>
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "message": "REMOVED"
 *     }
 *   ]
 * }
 */

/**
 * @api {get} /permission/getUserPermissions/:user 4 Get user permission list
 * @apiPermission JWT/PERM_USER_READ
 *
 * @apiName getUserPermissions
 * @apiGroup 2.Permission
 * @apiParam {String} :user Username
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {String[]} message Array of <code>permission name</code>
 * @apiSuccess {Strings} message. return <code>permission name</code>
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     "perm33",
 *     "TYPES_READ"
 *   ]
 * }
 *
 * @apiError {Boolean} success Should be false
 * @apiError {String} message Return error message.
 * @apiErrorExample {json} Error-Response:
 * {
 *   "success": false,
 *   "message": "USERNOTFOUND"
 * }
 */

/**
 * @api {get} /permission/getGroupsWithPermissions 5 Get groups with permissions
 * @apiPermission JWT/PERM_GROUP_READ
 *
 * @apiName getGroupsWithPermissions
 * @apiGroup 2.Permission
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of <code>Groups</code> object
 * @apiSuccess {Object} message.object
 * @apiSuccess {Number} message.object.id Group id
 * @apiSuccess {String} message.object.name Group name
 * @apiSuccess {Object[]} message.object.permission Array of <code>permission</code> in group
 * @apiSuccess {Object} message.object.permission object
 * @apiSuccess {Number} message.object.permission.id Permission id
 * @apiSuccess {String} message.object.permission.name Permission name
 * @apiSuccess {Object} message.object.permission.opt
 * @apiSuccess {Boolean} message.object.permission.opt.active True if permission is active
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 2,
 *       "name": "userrr",
 *       "permission": [
 *         {
 *           "id": 1,
 *           "name": "TYPES_READ",
 *           "opt": {
 *             "active": false
 *           }
 *         },
 *         {
 *           "id": 2,
 *           "name": "perm33",
 *           "opt": {
 *             "active": true
 *           }
 *         },
 *         {
 *           "id": 3,
 *           "name": "perm_3",
 *           "opt": {
 *             "active": true
 *           }
 *         }
 *       ]
 *     }
 *   ]
 * }
 */

/**
 * @api {post} /permission/updatePermissionInGroup 6 Update permission in groups
 * @apiPermission JWT/PERM_GROUP_MODIFY
 *
 * @apiName updatePermissionInGroup
 * @apiGroup 2.Permission
 *
 * @apiParam {Object} group_id Group object (Contains list of permission)
 * @apiParam {Object[]} group_id.object
 * @apiParam {Number} group_id.object.id Permission id
 * @apiParam {Boolean} group_id.object.active Enable/Disable permission
 * @apiParamExample {json} Request-Example:
 * {
 * 	"99": [
 * 		{
 * 			"id": 1,
 * 			"active": true
 * 		}
 * 	],
 * 	"2": [
 * 		{
 * 			"id": 1,
 * 			"active": false
 * 		},
 * 		{
 * 			"id": 2,
 * 			"activee": true
 * 		},
 * 		{
 * 			"id": 88,
 * 			"active": true
 * 		}
 * 	]
 * }
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>UPDATED</code> if permission was udpated correctly, <code>GROUPNOTFOUND</code> if group does not exist,
 * <code>PERMISSIONNOTFOUND</code> if permission does not exist or <code>INVALIDOBJECT</code> if put invalid object
 * @apiSuccess {String} [message.group_id] return group id
 * @apiSuccess {String} [message.group_name] return group name
 * @apiSuccess {String} [message.permission_id] return permission id
 * @apiSuccess {String} [message.permission_name] return permission name
 * @apiSuccess {String} [message.activate] returns true if permission is enabled
 * @apiSuccess {String} [message.id] return <code>id</code> if group or permission does not exist
 * @apiSuccess {Object} [message.object] returns invalid object
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     [
 *       {
 *         "group_id": 2,
 *         "group_name": "userrr",
 *         "permission_id": 1,
 *         "permission_name": "TYPES_READ",
 *         "activate": false,
 *         "message": "UPDATED"
 *       },
 *       {
 *         "object": {
 *           "id": 2,
 *           "activee": true
 *         },
 *         "message": "INVALIDOBJECT"
 *       },
 *       {
 *         "id": 88,
 *         "message": "PERMISSIONNOTFOUND"
 *       }
 *     ],
 *     [
 *       {
 *         "id": "99",
 *         "message": "GROUPNOTFOUND"
 *       }
 *     ]
 *   ]
 * }
 */

/**
 * @api {post} /permission/updateUserPermission 7 Update User permission
 * @apiPermission JWT/PERM_USER_MODIFY
 *
 * @apiName updateUserPermission
 * @apiGroup 2.Permission
 *
 * @apiParam {Object} user_id User object
 * @apiParam {Object[]} user_id.object
 * @apiParam {Number} user_id.object.id Permission id
 * @apiParam {Boolean} user_id.object.active Enable/Disable permission
 * @apiParamExample {json} Request-Example:
 * {
 * 	"1": [
 * 		{
 * 			"id": 1,
 * 			"active": true
 * 		},
 * 		{
 * 			"id": 77,
 * 			"active": false
 * 		},
 * 		{
 * 			"id": 2,
 * 			"activee": false
 * 		}
 * 	]
 * }
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of object
 * @apiSuccess {String} message.message return <code>UPDATED</code> if permission was udpated correctly, <code>PERMISSIONNOTFOUND</code>
 * if permission does not exist or <code>INVALIDOBJECT</code> if put invalid object
 * @apiSuccess {String} [message.user_id] return User id
 * @apiSuccess {String} [message.permission_id] return permission id
 * @apiSuccess {String} [message.permission_name] return permission name
 * @apiSuccess {String} [message.activate] returns true if permission is enabled
 * @apiSuccess {String} [message.id] return <code>id</code> if permission does not exist
 * @apiSuccess {Object} [message.object] returns invalid object
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "user_id": 1,
 *       "permission_id": 1,
 *       "permission_name": "TYPES_READ",
 *       "activate": true,
 *       "message": "UPDATED"
 *     },
 *     {
 *       "id": 77,
 *       "message": "PERMISSIONNOTFOUND"
 *     },
 *     {
 *       "object": {
 *         "id": 2,
 *         "activee": false
 *       },
 *       "message": "INVALIDOBJECT"
 *     }
 *   ]
 * }
 */

/**
 * @api {post} /permission/updateUserGroup 8 Update User group
 * @apiPermission JWT/PERM_USER_GROUP_MODIFY
 *
 * @apiName updateUserGroup
 * @apiGroup 2.Permission
 *
 * @apiParam {Number} user User id
 * @apiParam {Number} group Group id
 * @apiParamExample {json} Request-Example:
 * {
 * 	"user": 1,
 * 	"group": 2
 * }
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object} message
 * @apiSuccess {String} message.message return <code>GROUPUPDATED</code> if group is updated correctly, <code>USERNOTFOUND</code> if user does not exist,
 * <code>GROUPNOTFOUND</code> if group does not exist.
 * @apiSuccess {Number} [message.id] Return id if user or group does not exist.
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": {
 *     "message": "GROUPUPDATED"
 *   }
 * }
 */
