var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
    res.json({});
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