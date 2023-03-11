require("dotenv").config();
require("./configs/database");
const controller = require('./controllers/controller');
const auth = require('./middleware/auth');
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));

app.get('/', controller.loginView);
  
app.get("/login", controller.loginView);

app.get("/register", controller.registerView);

app.get("/account", auth, controller.accountView);

app.post('/login', controller.loginUser);

app.post("/register", controller.registerUser);

module.exports = app;