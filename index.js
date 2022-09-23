const http = require('http');
const myModule = require("./add");


const server = http.createServer(function(req, res){

  const _MyModule = new myModule('George');
  res.write('Sup, ' + _MyModule.resFunc());
  res.end('');
});

server.listen(5000);
