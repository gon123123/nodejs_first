const express = require('express');
const app = express();
const port = 3000;
// route 
app.get("/", function (req, res) {

    res.send("chao cac ban nha ");
})

// 127.0.0.1 == localhost
app.listen(port, function () {
    console.log("connection successful !!");
})