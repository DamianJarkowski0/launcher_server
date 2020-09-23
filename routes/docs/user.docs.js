/**
 * @api {get} /user/get:username 1.1 Get user information
 * @apiPermission JWT/USER_GET
 *
 * @apiName getUser
 * @apiGroup 1.User
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object} message <code>User</code> object
 * @apiSuccess {Number} message.id return <code>id</code> of <code>User</code> object in DB
 * @apiSuccess {Strings} message.username return <code>username</code> of <code>User</code> object in DB
 * @apiSuccess {Strings} message.email return <code>email</code> of <code>User</code> object in DB
 * @apiSuccess {Number} message.group_id return <code>group_id</code> of <code>User</code> object in DB
 * @apiSuccess {Object[]} message.permission Array of <code>User permission</code>
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": {
 *     "id": 1,
 *     "username": "kisi69",
 *     "email": "dmn406@gmail.com",
 *     "group_id": 3,
 *     "permission": [
 *       "PERM_TYPES_READ",
 *       "MENU_ADMINISTRATION",
 *       "PERM_TYPES_MODIFY",
 *       "PERM_TYPES_DELETE",
 *       "PERM_GROUP_READ",
 *       "PERM_GROUP_MODIFY",
 *       "PERM_GROUP_DELETE",
 *       "PERM_LIST_READ",
 *       "PERM_LIST_MODIFY",
 *       "PERM_LIST_DELETE",
 *       "PERM_USER_READ",
 *       "PERM_USER_MODIFY",
 *       "PERM_USER_GROUP_MODIFY",
 *       "MENU_PERMISSION"
 *     ]
 *   }
 * }
 */

/**
 * @api {get} /user/list 1.2 Get basic user list information
 * @apiPermission JWT/USER_GET
 *
 * @apiName getSimpleUserList
 * @apiGroup 1.User
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} message Array of <code>User</code> object
 * @apiSuccess {Number} message.id return <code>id</code> of <code>User</code> object in DB
 * @apiSuccess {Strings} message.username return <code>username</code> of <code>User</code> object in DB
 * @apiSuccess {Strings} message.email return <code>email</code> of <code>User</code> object in DB
 * @apiSuccess {Number} message.group_id return <code>group_id</code> of <code>User</code> object in DB
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": [
 *     {
 *       "id": 1,
 *       "username": "kisi69",
 *       "email": "dmn406@gmail.com",
 *       "group_id": 1
 *     },
 *     {
 *       "id": 2,
 *       "username": "kisi699",
 *       "email": "dmn406@gmail.comm",
 *       "group_id": 1
 *     },
 *   ]
}
 */

/**
 * @api {get} /user/list/lastupdate 1.3 Get last user update time
 * @apiPermission JWT/USER_GET
 *
 * @apiName getLastUpdateDateUser
 * @apiGroup 1.User
 *
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object} message
 * @apiSuccess {Strings} message.updated_at return <code>date time</code> last updated user
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "success": true,
 *   "message": {
 *     "updated_at": "2019-11-01T00:00:00.000Z"
 *   }
 * }
 */
