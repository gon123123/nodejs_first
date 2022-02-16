const express = require('express');
const morgan = require('morgan');
const { engine } = require("express-handlebars");
const path = require('path');
const app = express();
const port = 3000;


// template engine 
app.engine('hbs', engine({extname : '.hbs'}));
app.set('view engine', 'hbs');
console.log(path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, "resources", "views"));

app.use(express.static(path.join(__dirname,"public")));
// HTTP logger 
app.use(morgan('combined'));

// route 
app.get("/", function (req, res) {
    res.render('home');
})
app.get("/news", function (req, res) {
    res.render('news');
});

// 127.0.0.1 == localhost
app.listen(port, function () {
    console.log("connection successful !!");
});