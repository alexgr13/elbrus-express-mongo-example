let express = require('express')
let morgan = require('morgan')
let app = express()
let tasksRouter = require('./routes/tasks')
let config = require('./config')
let mongoose = require('mongoose')
let Task = require('./models/task')

mongoose.connect(config.db.connection + '/' + config.db.name, {useNewUrlParser: true});

app.use(morgan('dev'))
app.use('/api/tasks', tasksRouter)
app.set('view engine', 'hbs');

app.get('/api/status', function (req, res) {
    if (mongoose.connection.readyState === 1) {
        res.type("text").send('OK')
    } else {
        res.code(500).send('Database connection error')
    }
});

app.get('/', function (req, res) {
    Task.find(function (err, tasks) {
        if (err) {
            return res.code(500).send(err)
        }
        res.render('list', {layout: "layout", tasks: tasks})
    })
});

app.listen(config.port, function () {
    console.log(`Example app listening on port ${config.port}!`)
});