const User = require('../Models/UserModel')
const jwt = require('jsonwebtoken');




module.exports.userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        
        const existingUser = await User.findOne({ email: email });

        if (existingUser) { 
            return res.status(409).json({ message: "User already registered" });
        }

        const newUser = new User({ name, email, password });

        await newUser.save();
        console.log(newUser);

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports.userSignin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        // const secretKey = 'your-secret-key';
        // const token = jwt.sign({ user: user._id }, secretKey);
        const userId = user._id;
        const userName = user.name

        res.status(200).json({
            message: 'User signed in successfully',
            userId,
            userName,
           
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports.createTask = async (req, res, next) => {
    try {
        const { userId } = req.params; 
        const { title, duedate, description, status } = req.body;

    
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.taskmanagement.push({
            title,
            duedate,
            description,
            status,
        });

        console.log(user.taskmanagement,duedate)

       
        await user.save();

        res.status(201).json({ message: 'Task created successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports.getTasks = async (req, res, next) => {
    try {
        const { userId } = req.params;

        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

      
        const tasks = user.taskmanagement;

        res.status(200).json({ tasks });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports.updateTask = async (req, res, next) => {
    try {
        const { userId, taskId } = req.params;
        const { title, duedate, description, status } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

    
        const taskToUpdate = user.taskmanagement.id(taskId);
        if (!taskToUpdate) {
            return res.status(404).json({ message: 'Task not found' });
        }

   
        taskToUpdate.title = title;
        taskToUpdate.duedate = duedate;
        taskToUpdate.description = description;
        taskToUpdate.status = status;

      
        await user.save();

        res.status(200).json({ message: 'Task updated successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.deleteTask = async (req, res, next) => {
    try {
        const { userId, taskId } = req.params;

        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        
        const taskIndex = user.taskmanagement.findIndex(task => task._id == taskId);
        if (taskIndex === -1) {
            return res.status(404).json({ message: 'Task not found' });
        }

   
        user.taskmanagement.splice(taskIndex, 1);


        await user.save();

        res.status(200).json({ message: 'Task deleted successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports.getTaskById = async (req, res, next) => {
    try {
        const { userId, taskId } = req.params;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const task = user.taskmanagement.id(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ task });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

