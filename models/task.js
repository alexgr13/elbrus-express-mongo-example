let mongoose = require('mongoose')

var taskSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    isDone: { type: Boolean, required: true },
});

module.exports = mongoose.model('Task', taskSchema);