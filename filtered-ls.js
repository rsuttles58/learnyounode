const directory = process.argv[2];
const fileType = `.${process.argv[3]}`;

const fs = require("fs");
const path = require("path");

fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    if (path.extname(file) === fileType) {
      console.log(file);
    }
  });
});
