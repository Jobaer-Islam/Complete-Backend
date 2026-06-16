const express = require('express');

const app = express()

app.get("/", (req, res)=>{
    res.send("Ki obstha, Backend er?")
})
app.get("/about", (req, res)=>{
    res.send("About e ki jante ashli?")
})

app.listen(3000)