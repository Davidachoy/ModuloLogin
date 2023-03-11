require("dotenv").config();
require("./configs/database");
const controller = require('./controllers/controller');

const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});
  
app.get("/login", controller.loginView);

app.get("/register", controller.registerView);

app.post("/register")

module.exports = app;