var sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');
const PEPPER = "iam a vet";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    const vetSignup = (request, response) => {
        response.render('vet/signup');
    };

    const vetCreated = (request, response) => {
        db.vet.vetCreated(request.body, (error, queryResult) => {
            if (error) {
                console.error('error getting user:', error);
                response.sendStatus(500);
            } else {
                if (queryResult.rowCount >= 1) {
                    let user = queryResult.rows[0];
                    let currentSessionCookie = sha256(user.email + user.id + PEPPER);
                    response.cookie('loggedIn', currentSessionCookie);
                    response.cookie('userName', user.email);
                    response.cookie('userId', user.id);
                    console.log('User created successfully');
                    response.redirect('/vet/home/' + user.id);
                } else {
                    response.send('Try again.');
                    console.log('User could not be created');
                }
            }
        });
    };

    const vetLogin = (request, response) => {
        response.render('vet/login');
    };

    const vetLoggedIn = (request, response) => {
        const callback = (err, hashedValue, queryResult) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again');
            } else if (queryResult === false) {
                response.send('Try again');
            } else if (queryResult[0].password === hashedValue) {
                let user = queryResult[0];
                let currentSessionCookie = sha256(user.email + user.id + PEPPER);
                response.cookie('loggedIn', currentSessionCookie);
                response.cookie('userName', user.email);
                response.cookie('userId', user.id);
                response.redirect('/vet/home/' + user.id);
            } else {
                response.send('Try again');
            }
        }
        db.vet.vetLoggedIn(request.body, callback);
    };

    const vetHome = (request, response) => {
        const callback = (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn'] && request.cookies['userId'] === request.params['id']) {
                    response.render('vet/home', { file: result.rows, id: request.params['id'] });
                } else {
                    response.send('Please log into your vet account.');
                }
            }
        }
        db.vet.vetHome(request.cookies['userId'], callback);
    };

    const vetEdit = (request, response) => {
        const callback = (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn'] && request.cookies['userId'] === request.params['id']) {
                    response.render('vet/editvet', { vet: result });
                } else {
                    response.send('Please log into your vet account.');
                }
            }
        }
        db.vet.vetEdit(request.cookies['userId'], callback);
    };

    const vetUpdated = (request, response) => {
        const callback = (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again.');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn'] && request.cookies['userId'] === request.params['id']) {
                    response.send('Account updated!');
                } else {
                    response.send('Please log into your vet account.');
                }
            }
        }
        db.vet.vetUpdated(request.body, callback);
    };

    const vetPassword = (request, response) => {
        response.render('vet/resetpassword', { vet: request.cookies['userId'] });
    };

    const vetPasswordReset = (request, response) => {
        db.vet.vetPasswordReset(request.body, (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again.');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn'] && request.cookies['userId'] === request.params['id']) {
                    response.send('Password updated!');
                } else {
                    console.log('COKKIE ID' + request.cookies['userId'] );
                    console.log('PARAM ID' + request.params['id'] );
                    response.send('Please log into your vet account.');
                }
            }
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        vetSignup,
        vetCreated,
        vetLogin,
        vetLoggedIn,
        vetHome,
        vetEdit,
        vetUpdated,
        vetPassword,
        vetPasswordReset
    };
}