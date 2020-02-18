const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];

let time = strftime('%F %H' + ':' + '%M')

const server = net.createServer((socket)=>{
    socket.end(time + '\n');
})

server.on('error', (err)=> {
    throw err;
})

server.listen(port)
