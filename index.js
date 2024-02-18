const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const bodyParser = require('body-parser');

//model
const Blog = require("./models/blog")


const blogRoute = require("./routes/blog");
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
 
app.get('/utube', (req,res)=>{
    res.render('utube' ,{
        user: req.user,
    })
})

app.get('/allBlogs',async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render('allblogs', {
        user: req.user,
        blogs: allBlogs,
    });
});


app.use('/user', userRoute);
app.use('/diet', dietRoute);
app.use("/blog",blogRoute);




app.listen(PORT, () => console.log(`server started at ${PORT}`));