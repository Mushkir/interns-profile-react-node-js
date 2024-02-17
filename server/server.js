const httpServer = require("http");
const internsData = require("./data/interns.json");

const SERVER_PORT = "4545";

// * Need to create a server obj
httpServer
  .createServer(function (request, response) {
    console.log("Server Running...");

    // * Pass the JSON data in string format.
    response.write(JSON.stringify(internsData));

    response.end();
  })
  .listen(SERVER_PORT);
