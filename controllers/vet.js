var sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');
const SALT = "iam a pet owner";
const PEPPER = "iam a vet";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    const ownerSignup = (request, response) => {
        response.render('owner/signup');
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        ownerSignup
    };
}