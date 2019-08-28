const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'helf',
      user: 'me',
      password: 'password'
    }
  });
  
  module.exports = knex;