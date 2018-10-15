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
    const create = (user, callback) => {
      // run user input password through bcrypt to obtain hashed password

      var hashedValue = sha256(user.password);

      // set up query
      const queryString = 'INSERT INTO users (name, password) VALUES ($1, $2)';
      const values = [
        user.name,
        hashedValue
      ];

      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        callback(error, queryResult);
      });
    };

    const userLoggedIn = (input, callback) => {

    let name = input.name;
    const queryString = `SELECT * FROM users WHERE name ='${name}'`;
    // console.log('QUERYSTRING:', queryString)
    let hashedValue = sha256(input.password);

    dbPoolInstance.query(queryString, (err, result) => {


        console.log('RESULT ROW', result.rows);
        callback(err, hashedValue, result.rows[0]);
  });
};

    return {
      create,
      userLoggedIn
    };
};
