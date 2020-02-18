const fileChecker = require('./mymodule');
const directory = process.argv[2];
const fileType = process.argv[3];

fileChecker(directory,fileType, function(err, data){
  // console.log(`Data: ${data}`);
    if(err){
        console.log(err);
        return;
      }
      else {
          data.forEach(function(f) {
            console.log(f);
          });
      }
})

