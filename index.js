const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { google } = require('googleapis');
const bodyParser = require('body-parser');


const apiKey = 'AIzaSyDKcjFBfJczIUVKD43mwBJtOkKsdnJaVGg';
const youtube = google.youtube({ version: 'v3', auth: apiKey });

const userRoute = require("./routes/user");
const dietRoute = require("./routes/diet");
const { checkForAuthenticationCookie } = require("./middlewares/auth");

const app = express();
const PORT = 8000;

//Data Base Connection
mongoose.connect('mongodb://localhost:27017/GymCode').then(e =>
    console.log("mongo connected"));

// Views
app.set("view engine", "ejs");
app.set("views", path.resolve('./views'));

//MiddleWare
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get('/', async (req, res) => {
    res.render('home', {
        user: req.user,
    });
});

// utube
app.get('/utube', (req, res) => {
    res.render('utube' , {
        user: req.user,
    });
});




app.use('/user', userRoute);
app.use('/diet', dietRoute);



app.listen(PORT, () => console.log(`server started at ${PORT}`));