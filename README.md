# To-Do List Application API

## Overview
This API allows users to manage their to-do lists by performing operations like creating, retrieving, updating, and deleting tasks. User authentication is handled through JWT (JSON Web Tokens), ensuring secure access.

## Features
- User Authentication (Sign-up, Login, Logout)
- CRUD operations on to-do items
- JWT-based token authentication
- Secure password storage using bcrypt
- Data stored in MongoDB

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)
- **JWT** for user authentication
- **Bcrypt** for password hashing
- **Jest & Supertest** for testing

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/krunal825/todo-api.git
   cd todo-api

2. **Install Dependencies Install the required packages:**
   npm install
 
3. **Set Up Environment Variables Create a .env file in the root of your project with the following content:**
   MONGO_URI=mongodb://localhost:27017/todoapp
   JWT_SECRET=your_secret_key

4. **Start the MongoDB Server Ensure that you have MongoDB installed and running on your machine. If MongoDB is installed via Homebrew (on macOS), you can start it with:**
   brew services start mongodb/brew/mongodb-community
**If you’re using Windows, start the MongoDB service from the Services app or by running:**
   net start MongoDB

**Start the Server You can now start the Express server by running:**
   npm start

**The API will be running at http://localhost:5000.**



### API Documentation

  ## Authentication
1. **Register User**
       Endpoint: POST /api/register
       Request Body:
                    {
                        "username": "testuser",
                        "email": "testuser@example.com",
                        "password": "password123"
                    }

        Response : {
                    "message": "User registered successfully"
                   }

2. **Login User**
       Endpoint: POST /api/login
       Request Body:
                    {
                    "email": "testuser@example.com",
                    "password": "password123"
                    }

        Response:
                    {
                    "token": "your_jwt_token"
                    }


## to-Do CRUD Operations
3. **Create To-Do**
        Endpoint: POST /api/todos
        Authorization: Bearer token (from login)
        Request Body:
                        {
                        "title": "Test ToDo",
                        "description": "This is a test to-do item"
                        }

        Response:
                        {
                        "_id": "todo_id",
                        "title": "Test ToDo",
                        "description": "This is a test to-do item",
                        "status": "incomplete"
                        }


4. **Get All To-Dos**
            Endpoint: GET /api/todos
            Authorization: Bearer token (from login)
            
            Response:
                        [
                        {
                            "_id": "todo_id",
                            "title": "Test ToDo",
                            "description": "This is a test to-do item",
                            "status": "incomplete"
                        }
                        ]


5. **Get a Specific To-Do**
            Endpoint: GET /api/todos/:id
            Authorization: Bearer token (from login)
            
            Response:
                        {
                        "_id": "todo_id",
                        "title": "Test ToDo",
                        "description": "This is a test to-do item",
                        "status": "incomplete"
                        }
            
            Replace :id with the actual To-Do ID.


6. **Update a To-Do**
            Endpoint: PUT /api/todos/:id
            Authorization: Bearer token (from login)
            Request Body:
                            {
                            "title": "Updated ToDo",
                            "description": "This is an updated description",
                            "status": "completed"
                            }

            Response:
                        {
                        "_id": "todo_id",
                        "title": "Updated ToDo",
                        "description": "This is an updated description",
                        "status": "completed"
                        }


7. **Delete a To-Do**
            Endpoint: DELETE /api/todos/:id
            Authorization: Bearer token (from login)
            
            Response:
                        {
                        "message": "To-Do item deleted successfully"
                        }



