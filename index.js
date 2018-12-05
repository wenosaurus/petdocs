const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const db = require('./db');
var multer  = require('multer');

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

const upload = multer({ dest: './public/uploads' });
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

require('./routes')(app, upload, db);

/**
 * ===================================
 * Route Handler Functions
 * ===================================
 */

app.get('/', (request, response) => {
    response.render('home');
});

app.get('/logout', (request, response) => {
    response.clearCookie('loggedIn');
    response.clearCookie('userName');
    response.clearCookie('userId');
    response.render('loggedout');
});

app.get('/success', (request, response) => {
    response.render('success');
});

app.get('/tryagain', (request, response) => {
    response.render('tryagain');
});

app.get('/privacy', (request, response) => {
    response.render('privacy');
});
/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Ahoy we go from the port of 3000!!!'));

// Handles CTRL-C shutdown
function shutDown() {
    console.log('Recalling all ships to harbour...');
    server.close(() => {
        console.log('... all ships returned...');
        db.pool.end(() => {
            console.log('... all loot turned in!');
            process.exit(0);
        });
    });
};

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);