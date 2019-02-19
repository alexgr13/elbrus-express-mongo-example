let mongoose = require('mongoose')

var taskSchema = new mongoose.Schema({
    name: String,
    isDone: Boolean,
});

module.exports = mongoose.model('Task', taskSchema);