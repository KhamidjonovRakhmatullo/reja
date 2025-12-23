/**
 * Backend Server Side Rendering (BSSR)
 */

console.log("Backend Server Side Rendering (BSSR) started");

// ===============================
// Imports
// ===============================
const express = require("express");
const http = require("http");

// ===============================
// App Initialization
// ===============================
const app = express();

// ===============================
// 1. Request Entrance
// ===============================

// * Let coming browser request to enter public folder (CSS, images, JS)
app.use(express.static("public"));
// * Convert incoming json data to object structure
app.use(express.json());
// * Get POSTed input data which coming from traditional form request
app.use(express.urlencoded({extended: true}));


// ===============================
// 3. Session
// ===============================


// ===============================
// 3. View Engine (EJS)
// ===============================

// Direction to the folder
app.set("views", "views");
// Set EJS as the template engine
app.set("view engine", "ejs");


// ===============================
// 4. Routes
// ===============================

app.get("/", function(req, res) {
res.end(`Hello World!`);
});


// ---- ---- ---- ----
// 4. Server Configuration

// Create HTTP server
const server = http.createServer(app);

// PORT 
let PORT = 3000;

// Start server
server.listen(PORT, function() {
    console.log(`Server is running on port: ${PORT}`);
});