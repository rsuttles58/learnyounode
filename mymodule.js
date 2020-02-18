const fs = require("fs");
path = require("path");
//write a function that takes three arguments, directoryname, filetype, and a callback
function fileChecker(directory, ext, callback){
  
    fs.readdir(directory, (err, fileData) => {
      if(err) return callback(err);
      // if (err) {console.log("Error Received in readdir");}

      let items = []
      fileData.forEach(file => {
        if (path.extname(file) === "." + ext) {
          items.push(file);
        }

      });
      callback(null, items);
    });
}

module.exports = fileChecker;