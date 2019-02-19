var express = require('express');
var router = express.Router();
var Task = require('../models/task');

// define the home page route
router.get('/', function(req, res) {
    Task.find(function (err, tasks) {
        if (err) {
            res.code(500).send(err)
        }
        res.json(tasks)
    })
});

router.post('/', function(req, res) {
    res.status(201).end()
});

router.put('/', function(req, res) {
    res.status(200).end()
});

router.delete('/', function(req, res) {
    res.status(200).end()
});

module.exports = router;