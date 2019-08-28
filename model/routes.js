const express = require('express');
const Router = express();
const db = require('../knexfile');

Router.get('/', (req, res) => {
    db.select().from('weight')
        .then(data => {
            res.send(data)
        })
})


module.exports = Router;    