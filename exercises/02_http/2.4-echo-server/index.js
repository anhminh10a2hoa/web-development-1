const http = require('http');

http.createServer(function(request, response) {
  let body = '';
  request.on('data', (chunk) => {
    body += chunk;
  });
  request.on('end', () => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    const reversedBody = body.split('').reverse().join('');
    response.write(reversedBody);
    response.end();
  });
}).listen(3000);