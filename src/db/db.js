const mongoose = require('mongoose');


async function connectDB() {
    
    await mongoose.connect("mongodb+srv://cb:d5Pbs4GnrLITfQvR@complete-backe.tw0h6qr.mongodb.net/project-1")
    console.log("Connected to DB");
}


module.exports = connectDB;