var sha256 = require('js-sha256');
const SALT = "iam a pet owner";

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    const ownerCreated = (user, callback) => {
        let defaultName = user.email.split("@")[0];
        let hashedValue = sha256(user.password);
        const queryString = 'INSERT INTO owner (email, password, name) VALUES ($1, $2, $3) RETURNING *';
        const values = [user.email, hashedValue, defaultName];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            callback(error, queryResult);
        });
    };

    const ownerLoggedIn = (input, callback) => {

        let email = input.email;
        const queryString = `SELECT * FROM owner WHERE email ='${email}'`;
        let hashedValue = sha256(input.password);
        dbPoolInstance.query(queryString, (err, result) => {
            if( result.rows.length > 0){
                callback(err, hashedValue, result.rows);
            } else{
                callback(err, hashedValue, false);
            }
        });
    };

    const ownerHome = (cookies, callback) => {
        let cookieId = cookies['userId'];
        const queryString = `SELECT * FROM pet WHERE owner_id = ${cookieId}`;
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result);
        });
    };

    const ownerEdit = (cookies, callback) => {
        let cookieId = cookies['userId'];
        const queryString = `SELECT * FROM owner WHERE id = ${cookieId}`;
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result.rows[0]);
        });
    };

    const ownerUpdated = (input, callback) => {
        let queryString = 'UPDATE "owner" SET "name"=($1), "email"=($2) WHERE "id"=($3)';
        const values = [input.name, input.email, parseInt(input.id)];

        dbPoolInstance.query(queryString, values, (err, result) => {

            callback(err, result.rows[0]);
        });
    };

    const ownerPasswordReset = (input, callback) => {
        console.log('HIYA' + input.password + input.id);
        const queryString = 'UPDATE "owner" SET "password"=($1) WHERE "id"=($2)';
        let hashedValue = sha256(input.password);
        const values = [hashedValue,  parseInt(input.id)];
        dbPoolInstance.query(queryString, values, (err, result) => {
            callback(err, result);
        });
    };

    return {
        ownerCreated,
        ownerLoggedIn,
        ownerHome,
        ownerEdit,
        ownerUpdated,
        ownerPasswordReset
    };
};