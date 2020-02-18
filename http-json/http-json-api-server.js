const URL = require("url");
const port = process.argv[2];
const http = require("http");
const moment = require('moment');

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "application/JSON" });
    if (req.method !== "GET") {
      return res.end("come GET me!\n");
    }

    let myURL = URL.parse(req.url)
    let myData = myURL.query;
    // console.log(myURL);
    console.log(myData);

    // const path = req.url;

    let hour = myURL.query.slice(15,17);
    let minute = myURL.query.slice(18,20);
    let second = myURL.query.slice(20,23);
    console.log("Hours:" + hour);
    console.log("Minutes:" + minute);
    console.log("Seconds" + second);

    const myObject = {
      "hour": hour,
      "minute": minute,
      "second": second
    }

    const unixObject = {
      "unixtime": unixTime
    }

    switch (myURL.pathname) {
      case "/api/parsetime":
        res.send(myObject);

      case "/api/unixtime":
        res.send(unixObject);

      default:
        return;
    }
}).listen(Number(port));

// TODO add an endpoint for api/unixtime
