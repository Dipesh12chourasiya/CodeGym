const express = require("express");

const app = express();
const PORT = 8000;

app.get('/' , (req ,res)=>{
    return res.send("Hi from the server");
})

app.listen(PORT , ()=> console.log("Server Started"));