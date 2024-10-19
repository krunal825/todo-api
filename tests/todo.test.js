// tests/todo.test.js
const request = require('supertest');
const app = require('../server');

describe('Todo API', () => {
  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 'Test Todo', description: 'Test Description' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title');
  });

  it('should fetch all todos', async () => {
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1); // assuming 1 todo created
  });
});
