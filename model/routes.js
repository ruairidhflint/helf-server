const express = require('express');
const Router = express();
const db = require('../database')

Router.get('/', (req, res) => {
    db.select().from('weight')
        .then(data => {
            res.send(data)
        })
})

Router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.select()
        .from('weight')
        .where('id', id)
        .then((data) => {
            res.send(data[0])
        })
})

Router.post('/', (req, res) => {
    const { date, weight, notes } = req.body;
    db.insert({ date, weight, notes })
        .returning('*')
        .into('weight')
        .then(data => {
            res.send(data[0])
        })
})

Router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.select()
        .from('weight')
        .where('id', id)
        .delete()
        .then(() => {
            res.send({message: `Record with ID #${id} deleted.`})
        })
})

module.exports = Router;    