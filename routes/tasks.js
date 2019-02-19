var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
    res.send('tasks get');
});

router.post('/', function(req, res) {
    res.send('tasks post');
});

router.put('/', function(req, res) {
    res.send('tasks put');
});

router.delete('/', function(req, res) {
    res.send('tasks delete');
});

module.exports = router;