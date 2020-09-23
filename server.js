const passport = require('passport');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const models = require('./models');
const {error} = require('./utils/helpers');
const cors = require('cors');
const compression = require('compression');
const logger = require('./utils/logger');
const config = require('config');
// const {createTables} = require('./utils/databaseManager');
const flash = require('connect-flash');

const fs = require('fs');
const spdy = require('spdy');
const path = require('path');
const rfs = require('rotating-file-stream');
const logDirectory = path.join(__dirname, 'log');
const https = require('https');

const port = config.get('PORT');
const database = config.get('DATABASES');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs('requests.log', {
    interval: '1d',
    path: logDirectory,
});

const app = express();

require('./utils/passport');

app.unsubscribe(compression());
app.use(compression());
app.use(cors());
app.use(morgan('combined',{stream: accessLogStream}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false, maxAge: 1},
}));
app.use(flash());

//DATABASE AUTHENTICATE
database.forEach((DB) => {
    models.sequelize[DB.NAME].authenticate().then(() => {
        models.sequelize[DB.NAME].sync().then(() => {});
        logger.debug(`Connected to SQL database:${DB.NAME}`);
        // createTables(DB.NAME);
    }).catch((err) => {
        logger.debug(`Unable to connect to SQL database:${DB.NAME}`);
        logger.error(err);
    });
});

// Router endpoints
app.use('/', require('./routes/index.route'));
app.use('/docs', require('./routes/docs.route'));
app.use('/user', require('./routes/user.route'));
app.use('/permission', require('./routes/permission.route'));

// catch 404 and forward to error handler
app.use((req, res) => {
    return error(res,"NOTFOUND",404);
});

let options = {};

if (config.get("PROTOCOL") !== "http") {
    options = {
        key: fs.readFileSync(config.get('SSL.KEY')),
        cert: fs.readFileSync(config.get('SSL.CERT')),
    };
}

if (config.get("PROTOCOL") === "https") {
    https.createServer(options, app)
        .listen(port, () => logger.info(`Listening on port ${port}`));
} else if (config.get("PROTOCOL") === "http/2") {
    spdy.createServer(options, app)
        .listen(port, () => logger.info(`Listening on port ${port}`));
} else {
    app.listen(port, () => logger.info(`Listening on port ${port}`));
}

//Log Env
logger.info(`Server running on ${config.get('ENV')} mode`);
