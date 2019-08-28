const express = require('express');
const Router = express();
const Helpers = require('../model/dbHelpers');
const Middleware = require('./middleware');

Router.get('/', (req, res) => {
    Helpers.getAllEntries()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

Router.get('/:id', Middleware.checkIDIsValid, (req, res) => {
    const { id } = req.params;
    Helpers.getEntryByID(id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

Router.post('/', Middleware.checkEntryIsValid, (req, res) => {
    const { date, weight, notes } = req.body;
    Helpers.postNewEntry(date, weight, notes)
        .then(data => {
            res.status(201).json(data[0]);
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

Router.delete('/:id', Middleware.checkIDIsValid, (req, res) => {
    const { id } = req.params;
    Helpers.deleteEntryByID(id)
        .then(() => {
            res.status(202).json({ message: `Record with ID #${id} deleted.` });
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

module.exports = Router;    