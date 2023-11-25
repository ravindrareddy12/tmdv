const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://reddy:1234@cluster0.gdf3qiw.mongodb.net/task?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error connecting to MongoDB"));

db.once('open', function () {
    console.log("Connected to MongoDB");
});

module.exports = db;
