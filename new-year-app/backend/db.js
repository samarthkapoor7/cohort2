const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kapoorsamarth7:wBMJixjgzyOIIhZY@cluster0.ck9mw.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}