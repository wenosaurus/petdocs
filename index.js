const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const cookieParser = require('cookie-parser')
const sha256 = require('js-sha256');
const SALT = "bananas are delicious";

// Initialise postgres client
const config = {
  user: 'wenvo',
  host: '127.0.0.1',
  database: 'petdocs',
  port: 5432,
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('Idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Route Handler Functions
 * ===================================
 */

const getRoot = (request, response) => {
    response.send('Welcome to Petdoc');
};

// /**
//  * ===================================
//  * Owner
//  * ===================================
//  */

const ownerSignup = (request, response) => {
  response.render('owner/signup');
};

const ownerCreated = (request, response) => {

    let defaultName = request.body.email.split("@")[0];
    const queryString = 'INSERT INTO owner (email, password, name) VALUES ($1, $2, $3)';
    let hashedValue = sha256(request.body.password);
    const values = [request.body.email, hashedValue, defaultName];
    pool.query(queryString, values, (err, result) => {
        if (err) {
            console.error('Query error:', err.stack);
            response.send('Try again');
        } else {
            response.send("Thanks for signing up");
        }
    });
};

const ownerLogin = (request, response) => {
  response.render('owner/login');
}

const ownerLoggedIn = (request, response) => {
    const queryString = `SELECT password, email, id FROM owner WHERE email = '${request.body.email}'`;
    let hashedPassword = sha256(request.body.password);

    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('Query error:', err.stack);
            response.send('Try again');
        } else if (result.rows.length < 1){
            response.send('Try again');
        } else if (result.rows[0].password === hashedPassword && request.body.email === result.rows[0].email){
            let currentSessionCookie = sha256(result.rows[0].email + result.rows[0].id.toString() + SALT);
            response.cookie('loggedIn', currentSessionCookie);
            response.cookie('userName', result.rows[0].email);
            response.cookie('userId', result.rows[0].id);
            response.send('You are logged in');
        } else {
            response.send('Try again');
        }
    });
};

// /**
//  * ===================================
//  * Vet
//  * ===================================
//  */

const petNew = (request, response) => {
    if (sha256(request.cookies['userName'] + request.cookies['userId'].toString() + SALT ) === request.cookies['loggedIn']) {
        response.render('owner/pet', {userID: request.cookies['userId']});
    } else {
        response.send('Make sure you are logged in');
    }
};

const petAdded = (request, response) => {
    if (request.body.name != "" && request.cookies['userId']) {
        const queryString = 'INSERT INTO pet(name, type, gender, birthdate, weight, img, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7);';
        const values = [request.body.name, request.body.type, request.body.gender, request.body.birthdate, request.body.weight, request.body.img, request.cookies['userId']];
        pool.query(queryString, values, (err, result) => {
            if (err) {
                console.log('query error:', err.stack);
            } else {
                response.send('Pet added');
            }
        });
    } else {
        response.send('Ensure required fields are filled and/or you are logged in');
    }
};

// /**
//  * ===================================
//  * Vet
//  * ===================================
//  */

const vetSignup = (request, response) => {
    response.render('vet/signup');
};

const vetCreated = (request, response) => {
    let defaultName = request.body.email.split("@")[0];
    const queryString = 'INSERT INTO vet (email, password, name) VALUES ($1, $2, $3)';
    let hashedValue = sha256(request.body.password);
    const values = [request.body.email, hashedValue, defaultName];
    pool.query(queryString, values, (err, result) => {
        if (err) {
            console.error('Query error:', err.stack);
            response.send('Try again');
        } else {
            response.send("Thanks for signing up");
        }
    });
}

const vetLogin = (request, response) => {
    response.render('vet/login');
}

const vetLoggedIn = (request, response) => {
    const queryString = `SELECT password, id, email FROM vet WHERE email = '${request.body.email}'`;
    let hashedPassword = sha256(request.body.password);
    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('Query error:', err.stack);
            response.send('Try again');
        } else if (result.rows.length < 1){
            response.send('Try again');
        } else if (result.rows[0].password === hashedPassword && request.body.email === result.rows[0].email){
            let currentSessionCookie = sha256(result.rows[0].email + result.rows[0].id.toString() + SALT);
            response.cookie('loggedIn', currentSessionCookie);
            response.cookie('vetName', result.rows[0].email);
            response.cookie('vetId', result.rows[0].id);
            response.send('You are logged in');
        } else {
            response.send('Try again');
        }
    });
};

const logout = (request, response) => {
    response.clearCookie('loggedIn');
    response.clearCookie('userName');
    response.clearCookie('userId');
    response.send('You are logged out');
};

// /**
//  * ===================================
//  * Routes
//  * ===================================
//  */

app.get('/', getRoot);

app.get('/owner/pet', petNew);
app.post('/pet', petAdded);

app.get('/owner/signup', ownerSignup);
app.get('/owner/login', ownerLogin);
app.post('/ownerlogin', ownerLoggedIn);
app.post('/owner', ownerCreated);

app.get('/vet/signup', vetSignup);
app.get('/vet/login', vetLogin);
app.post('/vetlogin', vetLoggedIn);
app.post('/vet', vetCreated);

app.get('/logout', logout);

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
    pool.end(() => {
      console.log('... all loot turned in!');
      process.exit(0);
    });
  });
};

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

