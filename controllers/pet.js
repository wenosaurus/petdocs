var sha256 = require('js-sha256');
const SALT = "iam a pet owner";
const PEPPER = "iam a vet";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    const petNew = (request, response) => {
        if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
            response.render('owner/pet', { id: request.cookies['userId'] });
        } else {
            response.render('tryagain');
        }
    };

    const petAdded = (request, response) => {
        db.pet.petAdded(request.body, (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.render('tryagain');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
                    response.render('success');
                } else {
                    response.render('tryagain');
                }
            }
        });
    };

    const deletePet = (request, response) => {
        if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
            response.render('owner/deletepet', { pet : request.params['id'], user: request.cookies['userId'] })
        } else {
            response.send('Please log into your owner account.');
        }
    };

    const removePet = (request, response) => {
        db.pet.removePet(request.params['id'], (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.render('tryagain');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
                    response.render('success');
                } else {
                    response.render('tryagain');
                }
            };
        })
    };

    const petEdit = (request, response) => {
        const callback = (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.render('tryagain');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
                    response.render('owner/editpet', { pet: result });
                } else {
                    response.render('tryagain');
                }
            }
        }
        db.pet.petEdit(request.params['id'], callback);
    };

    const petUpdated = (request, response) => {
        const callback = (err, queryResult) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.render('tryagain');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
                    response.render('success');
                } else {
                    response.render('tryagain');
                }
            }
        }
        db.pet.petUpdated(request.body, callback);
    };

    const petFiles = (request, response) => {
        const callback = (err, queryResult) => {
            if (err) {
                console.error('Query error:', err.stack);
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
                    response.render('owner/petfiles', { file: queryResult.rows, id: request.cookies['userId'] });
                } else {
                    response.render('tryagain');
                }
            }
        }
        db.pet.petFiles(request.params['id'], callback);
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        petNew,
        petAdded,
        deletePet,
        removePet,
        petEdit,
        petUpdated,
        petFiles
    }
};