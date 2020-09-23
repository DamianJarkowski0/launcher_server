const passport = require('passport');
const Sequelize = require('sequelize');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const logger = require('../utils/logger');
const DBM = require('../utils/databaseManager');
const config = require('config');
const publicKEY = require('fs').readFileSync(config.get("JWT.PUBLICKEY"), 'utf8');

const Op = Sequelize.Op;
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: publicKEY,
    algorithm: config.get("JWT.ALGORITHM"),
};

passport.use('jwt', new JwtStrategy(opts, function (jwtPayload, done) {
    DBM.userModel.findOne({
        where: {
            id: jwtPayload.id,
            username: jwtPayload.username,
            changePasswordDate: {[Op.lte]: (jwtPayload.iat * 1000)},
        },
    }).then((user) => {
        if (user) {
            return done(null, user);
        } else {
            logger.warn(`${jwtPayload.username} use invalid token`);

            return done(null, false, {message: "AUTHORIZATION_FAILED"});
        }
    });
}));
