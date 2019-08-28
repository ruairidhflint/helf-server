const express = require('express');
const Router = express();
const db = require('../database')

Router.get('/', (req, res) => {
    db.select().from('weight')
        .then(data => {
            res.send(data)
        })
})

Router.post('/', (req, res) => {
  const {date, weight, notes} = req.body;
    db.insert({date, weight, notes})
        .returning('*')
        .into('weight')
        .then(data => {
            res.send(data[0])
        })
})

module.exports = Router;    