console.log("Web server run!");
const express = require("express");
const app = express();
const fs = require("fs");


// MongoDB call
const db = require("./server").db();


// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if (err){ 
//         console.log("Error:", err);
//     } else{
//         user = JSON.parse(data);
//     };
// });


// 1. Middleware (Request Processing)
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2. Session

// 3. View Engine
app.set("views", "views");
app.set("view engine", "ejs");


// 4. Routes (Request Handlers)
app.post("/create-plan", (req, res) => {

    console.log("User entered to /create-plan");

    //code with db here
    console.log(req.body);
    const new_reja = req.body.reja_input
    
    db.collection("plans0").insertOne({reja1: new_reja}, (err, data) => {
        if(err){
            console.log(err);
            res.end("Something went wrong while adding your plan")
        }else{
            res.end("Your plan was successfully added!");
        };
    });
});

/*
   /create-plan  =>  shu action ga ega bo'lgan form ga yoz

   req.body      =>  req.body dan kelayotgan hamma input ma'lumotlar

   reja_input    =>  ayni shu name ga ega bo'lgan input ga kelgan ma'lumot

   plans0        =>  Reja folder ichiga plans0 deb nomlab collection och va yoz

   reja1         =>  reja1 degan "key / nom" bilan "value / qiymat"ni yoz! 
*/


// app.get("/author", (req, res) => {
//     res.render("author", {user: user});
// });


app.get("/", function(req, res) {
    console.log("User entered to /");
    db.collection("plans0")
    .find()
    .toArray((err, data) => {
        if(err){
            console.log(err);
            res.end("Something went wrong while reading your plan");
        }else{
            // console.log("data /get:", data);
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;