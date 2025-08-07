const http = require("http");
const fs = require("fs");
const url = require("url");

const my_server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  // console.log("request recive by the server");
  const log = `${Date.now()}: ${req.url} : new request recived`;
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  fs.appendFile(
    "details.txt",
    log,
    (err, data) => {
      switch (req.url) {
        case "/":
          res.end("this is home page");
          break;
        case "/contact":
          req.end("this is contact page");
          break;
        case "/about":
          req.end("hye this sie shweta");
        default:
          res.end("404 Not Found");
      }
    }

    // res.end("hello from the server")
  );
  // console.log(req.httpVersion);
});
my_server.listen(8000, () => console.log("server started"));
