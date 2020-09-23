const passport = require('passport');
const {error} = require('../utils/helpers');
const permission = require('../services/permission.service');

const authorize = (perm) => {
    return function (req, res, next) {
        passport.authenticate('jwt', {session: false}, (err, user, info) => {
            if (user) {
                if (perm) {
                    permission.hasPermission(user,perm).then((tmp) => {
                        if (user.username !== req.params.user) {
                            if (!tmp) {
                                return error(res,"NOPERMISSION",401);
                            }
                        }
                        next();
                    });
                } else {
                    next();
                }
            } else {
                // res.redirect('/authorizationfailed');
            }
        })(req, res, next);
    };
};

module.exports.authorize = authorize;
