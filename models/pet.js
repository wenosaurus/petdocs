var sha256 = require('js-sha256');
const SALT = "iam a pet owner";
const PEPPER = "iam a vet";

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    const petAdded = (input, callback) => {
        const queryString = 'INSERT INTO pet(name, type, gender, birthdate, weight, img, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7);';
        const values = [input.name, input.type, input.gender, input.birthdate, input.weight, input.img, input.id];
        dbPoolInstance.query(queryString, values, (err, result) => {
            callback(err, result);
        });
    };

    return {
      petAdded
    }
};
