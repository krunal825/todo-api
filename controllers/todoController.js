// controllers/todoController.js
const Todo = require('../models/Todo');

// Create Todo
exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = new Todo({ title, description, user: req.user.id });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Read Todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get Specific To-Do List
exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};


// Update Todo
exports.updateTodo = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, { title, description, status }, { new: true });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete Todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
