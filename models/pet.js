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
        const values = [input.name, input.type, input.gender, input.birthdate, input.weight, input.img, input.owner_id];
        dbPoolInstance.query(queryString, values, (err, result) => {
            callback(err, result);
        });
    };

    const removePet = (id, callback) => {
        const queryString = 'DELETE FROM pet WHERE id = ' + id;
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result);
        });
    };

    const petEdit = (id, callback) => {
        const queryString = 'SELECT * FROM pet WHERE id =' + id;
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result.rows[0]);
        });
    };

    const petUpdated = (input, callback) => {
        let queryString = 'UPDATE "pet" SET "name"=($1), "type"=($2), "gender"=($3), "birthdate"=($4), "weight"=($5), "img"=($6) WHERE "id"=($7)';
        const values = [input.name, input.type, input.gender, input.birthdate, input.weight, input.img, input.id];
        dbPoolInstance.query(queryString, values, (err, result) => {
            callback(err, result.rows[0]);
        });
    };

    const petFiles = (id, callback) => {
        const queryString = 'SELECT * FROM file WHERE pet_id =' + id;
        console.log(queryString);
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result);
        });
    };

    return {
      petAdded,
      removePet,
      petEdit,
      petUpdated,
      petFiles
    }
};
