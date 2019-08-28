const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    database: 'help',
    user: 'me',
    password: 'password'
  }
});

module.exports = knex;