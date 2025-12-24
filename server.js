console.log("Web server run!");
const express = require("express");
const http = require("http");

const app = express();

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

app.get("/", function(req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}`);
});