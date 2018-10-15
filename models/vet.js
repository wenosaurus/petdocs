var sha256 = require('js-sha256');
const cookieParser = require('cookie-parser');
const SALT = "iam a pet owner";
const PEPPER = "iam a vet";

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    const vetCreated = (user, callback) => {
        let defaultName = user.email.split("@")[0];
        let hashedValue = sha256(user.password);
        const queryString = 'INSERT INTO vet (email, password, name) VALUES ($1, $2, $3) RETURNING *';
        const values = [user.email, hashedValue, defaultName];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            callback(error, queryResult);
        });
    };

    const vetLoggedIn = (input, callback) => {
        let email = input.email;
        const queryString = `SELECT * FROM vet WHERE email ='${email}'`;
        let hashedValue = sha256(input.password);
        dbPoolInstance.query(queryString, (err, result) => {
            if (result.rows.length > 0){
                callback(err, hashedValue, result.rows);
            } else {
                callback(err, hashedValue, false);
            }
        });
    };

    const vetHome = (id, callback) => {
        const queryString = 'SELECT * FROM file WHERE vet_id = ' + id;
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result);
        });
    };

    const vetEdit = (id, callback) => {
        const queryString = 'SELECT * FROM vet WHERE id =' + id;
        dbPoolInstance.query(queryString, (err, result) => {
            callback(err, result.rows[0]);
        });
    };

    const vetUpdated = (input, callback) => {
        let queryString = 'UPDATE "vet" SET "name"=($1), "email"=($2) WHERE "id"=($3)';
        const values = [input.name, input.email, parseInt(input.id)];

        dbPoolInstance.query(queryString, values, (err, result) => {

            callback(err, result.rows[0]);
        });
    };

    const vetPasswordReset = (input, callback) => {
        console.log('HIYA' + input.password + input.id);
        const queryString = 'UPDATE "vet" SET "password"=($1) WHERE "id"=($2)';
        let hashedValue = sha256(input.password);
        const values = [hashedValue,  parseInt(input.id)];
        dbPoolInstance.query(queryString, values, (err, result) => {
            callback(err, result);
        });
    };

    //     const userLoggedIn = (input, callback) => {

    //     let name = input.name;
    //     const queryString = `SELECT * FROM users WHERE name ='${name}'`;
    //     // console.log('QUERYSTRING:', queryString)
    //     let hashedValue = sha256(input.password);

    //     dbPoolInstance.query(queryString, (err, result) => {


    //         console.log('RESULT ROW', result.rows);
    //         callback(err, hashedValue, result.rows[0]);
    //   });
    // };

    return {
        vetCreated,
        vetLoggedIn,
        vetEdit,
        vetUpdated,
        vetHome,
        vetPasswordReset
    };
};