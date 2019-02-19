let express = require('express')
let Task = require('../models/task')
let multer = require('multer')
let bodyParser = require('body-parser')

let router = express.Router()

let upload = multer(); // for parsing multipart/form-data

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

// define the home page route
router.get('/', function(req, res) {
    Task.find(function (err, tasks) {
        if (err) {
            res.code(500).send(err)
        }
        res.json(tasks)
    })
});

router.post('/', upload.array(), function(req, res) {
    console.log(req.body);
    res.status(201).json(req.body);
});

router.put('/', function(req, res) {
    res.status(200).end()
});

router.delete('/', function(req, res) {
    res.status(200).end()
});

module.exports = router;