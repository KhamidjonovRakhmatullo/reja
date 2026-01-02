const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://rakhmatulloh:N3Or1A1EzbLhmFsO@cluster0.agpnvql.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("");
        console.log("MongoDB connection succeed");
        module.exports = client;

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;

        server.listen(PORT, function () {
          console.log(`Server is running on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
  }
);