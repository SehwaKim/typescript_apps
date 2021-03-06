"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
var json = axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(id, title, finished);
});
var logTodo = function (id, title, completed) {
    console.log("\n  id: " + id + " \n  title: " + title + " \n  finished: " + completed + "\n  ");
};
