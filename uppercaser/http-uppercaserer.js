const http = require('http');
const port = process.argv[2];
const map = require('through2-map');

//server from node snippets.  Needs to be customized for this task
http.createServer(function (req, res) {
  if (req.method !== 'POST'){
    return res.end('send me a POST\n')
  }

  req.pipe(map(function(chunk){
    return chunk.toString().toUpperCase();
  })).pipe(res)
}).listen(Number(port))

