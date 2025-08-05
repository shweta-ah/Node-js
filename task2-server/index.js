const http = require("http");

const my_server = http.createServer((req, res) => {
  console.log("request recive by the server");
  res.end("hello from the server");
});
my_server.listen(8000, () => console.log("server started"));
