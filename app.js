require("dotenv").config();
require("./configs/database");
const loginController = require('./controllers/loginController');
const auth = require('./middleware/auth');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static("assets"));

app.get('/', loginController.loginView);
  
app.get("/login", loginController.loginView);

app.get("/register", loginController.registerView);

app.get("/account", auth, loginController.accountView);

app.post('/login', loginController.loginUser);

app.post("/register", loginController.registerUser);

module.exports = app;