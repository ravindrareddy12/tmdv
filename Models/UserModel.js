const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    taskmanagement: [
    {
        title: String,
        duedate: String,
        description: String,
        status: String,
    }
],  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
