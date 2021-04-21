const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(res => console.log("Connected to MongoDB:", res))
    .catch(err => console.log("Cannot connected to the database:", err));