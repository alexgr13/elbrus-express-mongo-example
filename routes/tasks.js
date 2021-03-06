let express = require('express')
let Task = require('../models/task')
let multer = require('multer')
let bodyParser = require('body-parser')

let router = express.Router()

let upload = multer(); // for parsing multipart/form-data

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

// define the home page route
router.get('/', function (req, res) {
    Task.find(function (err, tasks) {
        if (err) {
            return res.code(500).send(err)
        }
        res.json(tasks)
    })
});

router.post('/', upload.array(), function (req, res) {
    if (!req.body.hasOwnProperty('name')) {
        return res.status(400).json({'error': "Request must contain the 'name' field"})
    }

    if (req.body.name.length === 0) {
        return res.status(400).json({'error': "The 'name' value must not be empty"})
    }

    let newTask = new Task({
        name: req.body.name,
        isDone: false,
    })

    newTask.save(function (err, task) {
        if (err) {
            return res.status(400).json({'error': err})
        }
        res.status(201).json(task);
    });
});

router.put('/:id', function (req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, function (err, task) {
        if (err) {
            return res.status(400).json({'error': err})
        }
        res.status(200).end();
    })
});

router.delete('/:id', function (req, res) {
    if (!req.params.hasOwnProperty('id')) {
        return res.status(400).json({'error': "Request must contain the 'id' field"})
    }

    if (req.params.id.length === 0) {
        return res.status(400).json({'error': "The 'id' value must not be empty"})
    }

    Task.findByIdAndRemove(req.params.id, function (err, task) {
        if (err) {
            return res.status(400).json({'error': err})
        }
        res.status(200).end();
    })
});

module.exports = router;