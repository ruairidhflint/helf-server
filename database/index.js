const knex = require('knex')({
    client: 'pg',
    connection: {
      database: 'helf',
      user: process.env.USER,
      password: process.env.PASSWORD
    }
  });
  
  module.exports = knex;