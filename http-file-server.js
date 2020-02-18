const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const file = process.argv[3];

//server from node snippets.  Needs to be customized for this task
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.createReadStream(file).pipe(res);
}).listen(Number(port))


