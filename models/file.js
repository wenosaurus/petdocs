var sha256 = require('js-sha256');
const SALT = "iam a pet owner";
const PEPPER = "iam a vet";

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    const fileAdded = (input, callback) => {
        const queryString = 'INSERT INTO file(name, pet_id, date, vet_id) VALUES($1, $2, $3, $4)';
        const values = [input.name, input.pet_id, input.date, input.vet_id];
        dbPoolInstance.query(queryString, values, (err, result) => {
            callback(err, result);
        });
    };

    const removeFile = (id, callback) => {
        const queryString = 'DELETE FROM file WHERE id = ' + id;
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result);
        });
    };

    const fileEdit = (id, callback) => {
        const queryString = 'SELECT * FROM file WHERE id =' + id;
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result.rows[0]);
        });
    };

    const fileUpdated = (input, callback) => {
        let queryString = 'UPDATE "file" SET "name"=($1), "date"=($2), "pet_id"=($3) WHERE "id"=($4)';
        const values = [input.name, input.date, input.pet_id, input.id];
        dbPoolInstance.query(queryString, values, (err, result) => {
            callback(err, result.rows[0]);
        });
    };

    return {
      fileAdded,
      removeFile,
      fileEdit,
      fileUpdated
    }
};
