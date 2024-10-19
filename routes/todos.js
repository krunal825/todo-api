// routes/todos.js
const express = require('express');
const { createTodo, getTodos, updateTodo, deleteTodo, getTodoById } = require('../controllers/todoController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/todos', auth, createTodo);
router.get('/todos', auth, getTodos);
router.get('/todos/:id', auth, getTodoById);
router.put('/todos/:id', auth, updateTodo);
router.delete('/todos/:id', auth, deleteTodo);

module.exports = router;