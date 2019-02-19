let express = require('express')
let morgan = require('morgan')
let app = express()
let tasksRouter = require('./routes/tasks')
let config = require('./config')
let mongoose = require('mongoose')

mongoose.connect(config.db.connection + '/' + config.db.name, {useNewUrlParser: true});

app.use(morgan('dev'))
app.use('/api/tasks', tasksRouter)

app.get('/api/status', function (req, res) {
    if (mongoose.connection.readyState === 1) {
        res.type("text").send('OK')
    } else {
        res.code(500).send('Database connection error')
    }
});

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(config.port, function () {
    console.log(`Example app listening on port ${config.port}!`)
});