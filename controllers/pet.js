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
            response.send('Please log into your owner account.');
        }
    };

    const petAdded = (request, response) => {
        db.pet.petAdded(request.body, (err, result) => {
            if (err) {
                console.error('Query error:', err.stack);
                response.send('Try again.');
            } else {
                if (sha256(request.cookies['userName'] + request.cookies['userId'] + SALT) === request.cookies['loggedIn']) {
                    response.send('Pet added!');
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
        petNew,
        petAdded
    }
};