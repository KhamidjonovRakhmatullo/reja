console.log("Web server run!");
const express = require("express");
const app = express();
const fs = require("fs");
const mongodb = require("mongodb");


// MongoDB call
const client = require("./server"); //TCP
const db = client.db(); //QALAM 


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

//create
app.post("/create-plan", (req, res) => {
    console.log("User entered to /create-plan");

    //code with db here
    console.log(req.body);
    const new_reja = req.body.reja_input
    
    db.collection("plans0")
    .insertOne({ reja1: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

/*
   /create-plan  =>  shu action ga ega bo'lgan form ga yoz

   req.body      =>  req.body dan kelayotgan hamma input ma'lumotlar

   reja_input    =>  ayni shu name ga ega bo'lgan input ga kelgan ma'lumot

   plans0        =>  Reja folder ichiga plans0 deb nomlab collection och va yoz

   reja1         =>  reja1 degan "key / nom" bilan "value / qiymat"ni yoz! 
*/

//delete
app.post("/delete-plan", (req, res) => {
    const id = req.body.id;
    console.log("id:", id);

    db.collection("plans0")
    .deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
        res.json({state: "success"});
    });
});


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