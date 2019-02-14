const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

// Defining Port on which our server will be running...
const PORT = 3000;

// initializing sequelize ORM
const sequelize = require("./configs/database.js");

// adding middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
// Middleware to parse request cookies
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));



// Setting up View Engine
app.set("view engine", "ejs");
// Defining path to views folder
app.set('views', 'views');


// importing routes
const indexRoute = require('./routes/index');
const authRoutes = require('./routes/auth');
app.use(authRoutes);
app.use(indexRoute);




// Syncing models and tables .. that mean is table is not present it will be created by seqelize module.
sequelize.sync()
    .then(result => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    }).catch(error => console.log(err));