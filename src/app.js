//Server Creation

const express = require('express');

const app = express()

const notes = []

// title, description

app.post("/notes", (req, res)=>{

    console.log(req.body);
})


module.exports = app