const express = require('express');
const morgan = require('morgan');
const { engine } = require("express-handlebars");
const path = require('path');
const app = express();
const port = 3000;

const route  = require('./routers/index.js'); // file index.js sẽ tự động được nạp mà không cần truyền


// template engine 
app.engine('hbs', engine({extname : '.hbs'}));
app.set('view engine', 'hbs');
console.log(path.join(__dirname, 'resources/views'));
app.set('views', path.join(__dirname, "resources", "views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended : true})); // gui tu form  // express dang su dung thu vien body parse
app.use(express.json()); // gui tu code javascript
// XMLHttpRequest , fetch , axios 

// HTTP logger 
app.use(morgan('combined'));

// route init
route(app);



// 127.0.0.1 == localhost
app.listen(port, function () {
    console.log("connection successful !!");
});