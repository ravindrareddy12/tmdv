
### API Functionalites
# Task Management API

Welcome to the Task Management App! This application allows users to sign up, log in, add tasks, and manage them efficiently. The app is developed using ReactJS and connected to a backend server.

## Getting Started

Follow these steps to set up and use the Task Management App on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository: git clone  https://github.com/ravindrareddy12/tmdv
2. cd tmdv
3. npm install
 4. npm run dev
### Features

Sign Up:http://localhost:3000/signup

New users can create an account by providing their name,email and password.

Signinin:
POST:http://localhost:3000/signin

Existing users can log in with their credentials.

Add Task:POST /users/:userId/tasks

Once logged in, users can add tasks with a title, description, and other relevant details.

Edit Task:PUT /users/:userId/tasks/:taskId
Users can edit existing tasks to update information.

Delete Task:DELETE /users/:userId/tasks/:taskId

Unwanted tasks can be deleted easily.

Getting Task By Id:GET /users/:userId/tasks/:taskId



Backend Integration
The MongoDB is connected to the backend for storing and retrieving task data. Ensure that the backend server is running and accessible.

#### Contributing
If you'd like to contribute to the project, follow these steps:

Fork the project.
Create your feature branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
Open a pull request.

