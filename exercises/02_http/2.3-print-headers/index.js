const http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(JSON.stringify(request.headers));
  response.end();
}).listen(3000);