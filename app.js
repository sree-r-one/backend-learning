const http = require("http");

const server = http.createServer((req, res) => {});

server.listen(3000, () => {
  console.log("Server is listening on PORT 3000");
});
