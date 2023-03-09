const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

const conn = mongoose.createConnection("mongodb://localhost:27017/test");

app.get('/', (req, res) => {
    res.send('Hello World!');
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("/user/login", function(req, res){
    res.sendFile();
});