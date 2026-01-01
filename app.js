console.log("Web server run!");
const express = require("express");
const app = express();
const fs = require("fs");


// MongoDB call
const db = require("./server").db();


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err){ 
        console.log("Error:", err);
    } else{
        user = JSON.parse(data);
    };
});

// 1. Middleware (Request Processing)
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2. Session

// 3. View Engine
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Routes (Request Handlers)
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({result: "Success! You have add a new item"});
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
});


app.get("/", function(req, res) {
    res.render("reja");
});

module.exports = app;