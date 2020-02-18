let fs = require('fs');
const file = process.argv[2]

let data = fs.readFileSync(file, 'utf8')

let dataArr = data.split('\n')
// data.forEach(char => {
//     if(char === "\n"){newLineCount++}
// })

console.log(dataArr.length - 1);

//iterate through the buffer array that is returned 
//iterate the newLineCount every time a newline is identified.
