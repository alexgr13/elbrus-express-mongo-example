let express = require('express')
let morgan = require('morgan')
let app = express()
let tasksRouter = require('./routes/tasks')

app.use(morgan('dev'))
app.use('/api/tasks', tasksRouter)

app.get('/api/status', function (req, res) {
    res.send('OK')
});

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});