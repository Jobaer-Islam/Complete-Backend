const mongoose = require('mongoose');

async function connectDB() {
    await mongoose.connect("mongodb+srv://cb:d5Pbs4GnrLITfQvR@complete-backe.tw0h6qr.mongodb.net/halley")

    console.log("Connect to DB");
    
}

module.exports = connectDB