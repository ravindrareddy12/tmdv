// userRoutes.js

const express = require('express');
const userController = require('../Controllers/UserController');

const router = express.Router();



router.post('/signup', userController.userSignup);

router.post('/signin', userController.userSignin);

router.get('/users/:userId/tasks/:taskId', userController.getTaskById);

router.post('/users/:userId/tasks', userController.createTask);

router.put('/users/:userId/tasks/:taskId', userController.updateTask);

router.get('/users/:userId/tasks', userController.getTasks);

router.delete('/users/:userId/tasks/:taskId', userController.deleteTask);


module.exports = router;
