const url = process.argv[2];
const http = require("http");

http.get(url, res => {
    //set encoding to get a string back.
  res.setEncoding("utf8");
  //instantiate the string which will hold the chunk data as it comes in.
  let rawData = "";

  //when the get method returns data in chunks, add it to the rawData string with a newline character
  res.on("data", chunk => {
    rawData += chunk;
  });

  //when the get request ends, log out the rawData.
  res.on("end", () => {
    console.log(rawData.length);
    console.log(rawData);
  });
});
