var sha256 = require('js-sha256');
const SALT = "iam a pet owner";
const PEPPER = "iam a vet";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    const fileNew = (request, response) => {
        if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
            response.render('vet/file', { id: request.cookies['userId'] });
        } else {
            response.render('tryagain');
        }
    };

    const fileAdded = (request, response) => {
        db.file.fileAdded(request.body, (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.render('tryagain');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
                    response.render('success');
                } else {
                    response.render('tryagain');
                }
            }
        });
    };

    const deleteFile = (request, response) => {
        if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
            response.render('vet/deletefile', { file : request.params['id'], user: request.cookies['userId'] })
        } else {
            response.render('tryagain');
        }
    };

    const removeFile = (request, response) => {
        db.file.removeFile(request.params['id'], (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.render('tryagain');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
                    response.render('success');
                } else {
                    response.render('tryagain');
                }
            };
        })
    };

    const fileEdit = (request, response) => {
        const callback = (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.render('tryagain');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
                    response.render('vet/editfile', { file: result });
                } else {
                    response.render('tryagain');
                }
            }
        }
        db.file.fileEdit(request.params['id'], callback);
    };

    const fileUpdated = (request, response) => {
        const callback = (err, queryResult) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again.');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + PEPPER) === request.cookies['loggedIn']) {
                    response.render('success');
                } else {
                    response.render('tryagain');
                }
            }
        }
        db.file.fileUpdated(request.body, callback);
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        fileNew,
        fileAdded,
        deleteFile,
        removeFile,
        fileEdit,
        fileUpdated
    }
};