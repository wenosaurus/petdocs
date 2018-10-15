const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const sha256 = require('js-sha256');
const db = require('./db');

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

require('./routes')(app, db);

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
    response.send('You are logged out');
});

// /**
//  * ===================================
//  * Owner
//  * ===================================
//  */

// const ownerSignup = (request, response) => {
//     response.render('owner/signup');
// };

// const ownerCreated = (request, response) => {
//     let defaultName = request.body.email.split("@")[0];
//     const queryString = 'INSERT INTO owner (email, password, name) VALUES ($1, $2, $3)';
//     let hashedValue = sha256(request.body.password);
//     const values = [request.body.email, hashedValue, defaultName];
//     pool.query(queryString, values, (err, result) => {
//         if (err) {
//             console.error('Query error:', err.stack);
//             response.send('Try again');
//         } else {
//             response.send("Thanks for signing up");
//         }
//     });
// };

// const ownerLogin = (request, response) => {
//     response.render('owner/login');
// }

// const ownerLoggedIn = (request, response) => {
//     const queryString = `SELECT password, email, id FROM owner WHERE email = '${request.body.email}'`;
//     let hashedPassword = sha256(request.body.password);

//     pool.query(queryString, (err, result) => {
//         if (err) {
//             console.error('Query error:', err.stack);
//             response.send('Try again');
//         } else if (result.rows.length < 1) {
//             response.send('Try again');
//         } else if (result.rows[0].password === hashedPassword && request.body.email === result.rows[0].email) {
//             let currentSessionCookie = sha256(result.rows[0].email + result.rows[0].id + SALT);
//             response.cookie('loggedIn', currentSessionCookie);
//             response.cookie('userName', result.rows[0].email);
//             response.cookie('userId', result.rows[0].id);
//             response.redirect('/owner/home/' + result.rows[0].id);
//         } else {
//             response.send('Try again');
//         }
//     });
// };

// const ownerEdit = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
//         const queryString = 'SELECT * FROM owner WHERE id = ' + request.params['id'];
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.render('owner/editowner', { owner: result.rows[0] });
//             }
//         });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// const ownerUpdated = (request, response) => {
//     if (request.cookies['userId'] === request.params['id']) {
// const queryString = 'UPDATE "owner" SET "name"=($1), "email"=($2), "password"=($3) WHERE "id"=($4)';
//         const values = [request.body.name, request.body.email, request.body.password, request.params['id']];
//         pool.query(queryString, values, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.send('Account updated!');
//             }
//         });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// const ownerHome = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
//         const queryString = 'SELECT pet.name, pet.id, pet.owner_id FROM pet INNER JOIN ownership ON (ownership.pet_id = pet.id) WHERE ownership.owner_id = ' + request.params['id'];
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.render('owner/home', { pet: result.rows, id: request.params['id'] });
//             }
//         });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// // /**
// //  * ===================================
// //  * Pet
// //  * ===================================
// //  */

// const petNew = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
//         response.render('owner/pet', { id: request.cookies['userId'] });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// const petAdded = (request, response) => {
//     if (request.cookies['userId']) {
//         const queryString = 'INSERT INTO pet(name, type, gender, birthdate, weight, img, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7);';
//         const values = [request.body.name, request.body.type, request.body.gender, request.body.birthdate, request.body.weight, request.body.img, request.cookies['userId']];
//         pool.query(queryString, values, (err, result) => {
//             if (err) {
//                 console.log('query error:', err.stack);
//             } else {
//                 response.send('Pet added!');
//             }
//         });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// const petEdit = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
//         const queryString = 'SELECT * FROM pet WHERE id = ' + request.params['id'];
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.render('owner/editpet', { pet: result.rows[0] });
//             }
//         });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// const petUpdated = (request, response) => {
//     if (request.cookies['loggedIn']) {
//         let id = request.params['id'];
//         const queryString = 'UPDATE "pet" SET "name"=($1), "type"=($2), "gender"=($3), "birthdate"=($4), "weight"=($5), "img"=($6) WHERE "id"=($7)';
//         const values = [request.body.name, request.body.type, request.body.gender, request.body.birthdate, request.body.weight, request.body.img, id];
//         pool.query(queryString, values, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.send('Pet updated!');
//             }
//         });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// const deletePet = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
//         const queryString = 'SELECT * FROM pet WHERE id = ' + request.params['id'] + ';';
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.render('owner/deletepet', { pet: result.rows[0] });
//             }
//         });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// const removePet = (request, response) => {
//     if (request.cookies['loggedIn']) {
//         let html = `<html>`;
//         html += `<body>`;
//         html += `<p>Pet Deleted!</p>`;
//         html += `<p><a href=/vet/home/${request.cookies['userId']}Click here</a> to return home.</p>`;
//         html += `</body>`;
//         html += `</html>`;
//         const queryString = 'DELETE FROM pet WHERE id = ' + request.params['id'];
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.log('Query error:', err.stack);
//             } else {
//                 response.send(html);
//             }
//         });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// // /**
// //  * ===================================
// //  * Vet
// //  * ===================================
// //  */

// const vetSignup = (request, response) => {
//     response.render('vet/signup');
// };

// const vetCreated = (request, response) => {
//     let defaultName = request.body.email.split("@")[0];
//     const queryString = 'INSERT INTO vet (email, password, name) VALUES ($1, $2, $3)';
//     let hashedValue = sha256(request.body.password);
//     const values = [request.body.email, hashedValue, defaultName];
//     pool.query(queryString, values, (err, result) => {
//         if (err) {
//             console.error('Query error:', err.stack);
//             response.send('Try again');
//         } else {
//             response.send("Thanks for signing up");
//         }
//     });
// }

// const vetLogin = (request, response) => {
//     response.render('vet/login');
// }

// const vetLoggedIn = (request, response) => {
//     const queryString = `SELECT password, id, email FROM vet WHERE email = '${request.body.email}'`;
//     let hashedPassword = sha256(request.body.password);
//     pool.query(queryString, (err, result) => {
//         if (err) {
//             console.error('Query error:', err.stack);
//             response.send('Try again');
//         } else if (result.rows.length < 1) {
//             response.send('Try again');
//         } else if (result.rows[0].password === hashedPassword && request.body.email === result.rows[0].email) {
//             let currentSessionCookie = sha256(result.rows[0].email + result.rows[0].id + PEPPER);
//             response.cookie('loggedIn', currentSessionCookie);
//             response.cookie('userName', result.rows[0].email);
//             response.cookie('userId', result.rows[0].id);
//             response.redirect('/vet/home/' + result.rows[0].id);
//         } else {
//             response.send('Try again');
//         }
//     });
// };

// const vetEdit = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
//         const queryString = 'SELECT * FROM vet WHERE id = ' + request.params['id'];
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.render('vet/editvet', { vet: result.rows[0] });
//             }
//         });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// const vetUpdated = (request, response) => {
//     if (request.cookies['loggedIn']) {
//         let id = request.params['id'];
//         const queryString = 'UPDATE "vet" SET "name"=($1), "email"=($2), "password"=($3) WHERE "id"=($4)';
//         const values = [request.body.name, request.body.email, request.body.password, id];
//         pool.query(queryString, values, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.send('Account updated!');
//             }
//         });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// const vetHome = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.params['id'] + PEPPER) === request.cookies['loggedIn']) {
//         const queryString = 'SELECT * FROM file WHERE vet_id = ' + request.params['id'];
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 console.log('Query result rows:', result.rows);
//             }
//             response.render('vet/home', { file: result.rows, id: request.params['id'] });
//         });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// // /**
// //  * ===================================
// //  * File
// //  * ===================================
// //  */

// const fileNew = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
//         response.render('vet/file', { id: request.cookies['userId'] });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// const fileAdded = (request, response) => {
//     if (request.cookies['userId']) {
//         const queryString = 'INSERT INTO file(name, pet_id, date, vet_id) VALUES($1, $2, $3, $4);';
//         const values = [request.body.name, request.body.pet_id, request.body.date, request.cookies['userId']];
//         pool.query(queryString, values, (err, result) => {
//             if (err) {
//                 console.log('query error:', err.stack);
//             } else {
//                 response.send('File added');
//             }
//         });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// const fileEdit = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
//         const queryString = 'SELECT * FROM file WHERE id = ' + request.params['id'];
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.render('vet/editfile', { file: result.rows[0] });
//             }
//         });
//     } else {
//         response.send('Please log into your owner account.');
//     }
// };

// const fileUpdated = (request, response) => {
//     if (request.cookies['loggedIn']) {
//         let id = request.params['id'];
//         const queryString = 'UPDATE "file" SET "name"=($1), "date"=($2), "pet_id"=($3) WHERE "id"=($4)';
//         const values = [request.body.name, request.body.date, request.body.pet_id, id];
//         pool.query(queryString, values, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.send('Pet updated!');
//             }
//         });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// const deleteFile = (request, response) => {
//     if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
//         const queryString = 'SELECT * FROM file WHERE id = ' + request.params['id'];
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.error('Query error:', err.stack);
//             } else {
//                 response.render('vet/deletefile', { file: result.rows[0] });
//             }
//         });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// const removeFile = (request, response) => {
//     if (request.cookies['loggedIn']) {
//         let id = request.params['id'];
//         const queryString = 'DELETE FROM file WHERE id = ' + id + ';';
//         pool.query(queryString, (err, result) => {
//             if (err) {
//                 console.log('Query error:', err.stack);
//             } else {
//                 response.send("File deleted");
//             }
//         });
//     } else {
//         response.send('Please log into your vet account.');
//     }
// };

// const logout = (request, response) => {
//     response.clearCookie('loggedIn');
//     response.clearCookie('userName');
//     response.clearCookie('userId');
//     response.send('You are logged out');
// };

// // /**
// //  * ===================================
// //  * Routes
// //  * ===================================
// //  */

// app.delete('/owner/pet/delete/:id', removePet);
// app.get('/owner/pet/:id/delete', deletePet);
// app.get('/owner/pet/:id/edit', petEdit);
// app.put('/owner/pet/:id', petUpdated);

// app.get('/owner/pet', petNew);


// app.get('/owner/signup', ownerSignup);
// app.get('/owner/login', ownerLogin);
// app.get('/owner/home/:id', ownerHome);
// app.put('/owner/:id', ownerUpdated);
// app.get('/owner/:id/edit', ownerEdit);
// app.post('/ownerlogin', ownerLoggedIn);
// app.post('/owner', ownerCreated);
// app.post('/pet', petAdded);

// app.delete('/vet/file/delete/:id', removeFile);
// app.get('/vet/file/:id/delete', deleteFile);
// app.get('/vet/file/:id/edit', fileEdit);
// app.put('/vet/file/:id', fileUpdated);
// app.get('/vet/file', fileNew);
// app.post('/file', fileAdded);

// app.get('/vet/signup', vetSignup);
// app.get('/vet/login', vetLogin);
// app.get('/vet/home/:id', vetHome);
// app.put('/vet/:id', vetUpdated);
// app.get('/vet/:id/edit', vetEdit);
// app.post('/vetlogin', vetLoggedIn);
// app.post('/vet', vetCreated);

// app.get('/logout', logout);

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