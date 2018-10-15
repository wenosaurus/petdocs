var sha256 = require('js-sha256');
const SALT = "iam a pet owner";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    const ownerSignup = (request, response) => {
        response.render('owner/signup');
    };

    const ownerCreated = (request, response) => {
        db.owner.ownerCreated(request.body, (error, queryResult) => {
            if (error) {
                console.error('error getting user:', error);
                response.sendStatus(500);
            } else {
                if (queryResult.rowCount >= 1) {
                    let user = queryResult.rows[0];
                    let currentSessionCookie = sha256(user.email + user.id + SALT);
                    response.cookie('loggedIn', currentSessionCookie);
                    response.cookie('userName', user.email);
                    response.cookie('userId', user.id);
                    console.log('User created successfully');
                    response.redirect('/owner/home/' + user.id);
                } else {
                    response.send('Try again.');
                    console.log('User could not be created');
                }
            }
        });
    };

    const ownerLogin = (request, response) => {
        response.render('owner/login');
    };

    const ownerLoggedIn = (request, response) => {

        const callback = (err, hashedValue, queryResult) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again');
            } else if (queryResult.password === hashedValue) {
                let user = queryResult;
                let currentSessionCookie = sha256(user.email + user.id + SALT);
                response.cookie('loggedIn', currentSessionCookie);
                response.cookie('userName', user.email);
                response.cookie('userId', user.id);
                response.redirect('/owner/home/' + user.id);
            } else {
                response.send('Try again');
            }
        }
        db.owner.ownerLoggedIn(request.body, callback);
    };

    const ownerHome = (request, response) => {
        const callback = (err, queryResult) => {
            if (err) {
                console.error('Query error:', err.stack);
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn'] && request.cookies['userId'] === request.params['id']) {
                    response.render('owner/home', { pet: queryResult.rows, id: request.params['id'] });
                } else {
                    response.send('Please log into your owner account.');
                }
            }
        }
        db.owner.ownerHome(request.cookies, callback);
    };

    const ownerEdit = (request, response) => {
        const callback = (err, queryResult) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn'] && request.cookies['userId'] === request.params['id']) {
                    response.render('owner/editowner', { owner: queryResult });
                } else {
                    response.send('Please log into your owner account.');
                }
            }
        }
        db.owner.ownerEdit(request.cookies, callback);
    };

    const ownerUpdated = (request, response) => {
        const callback = (err, queryResult) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again.');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn'] && request.cookies['userId'] === request.params['id']) {
                    response.send('Account updated!');
                } else {
                    response.send('Please log into your owner account.');
                }
            }
        }
        db.owner.ownerUpdated(request.body, callback);
    };

    const ownerPassword = (request, response) => {
        response.render('owner/resetpassword', { owner: request.cookies['userId'] });
    };

    const ownerPasswordReset = (request, response) => {
        db.owner.ownerPasswordReset(request.body, (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again.');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn'] && request.cookies['userId'] === request.params['id']) {
                    response.send('Password updated!');
                } else {
                    response.send('Please log into your owner account.');
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
        ownerSignup,
        ownerCreated,
        ownerLogin,
        ownerLoggedIn,
        ownerHome,
        ownerEdit,
        ownerUpdated,
        ownerPassword,
        ownerPasswordReset
    }
};