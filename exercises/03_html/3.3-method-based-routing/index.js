const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Respond with the contents of get.html for GET requests
    fs.readFile('get.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST') {
    // Respond with the contents of post.html for POST requests
    fs.readFile('post.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // For any other request method, respond with 405 Method Not Allowed
    res.writeHead(405, {
      'Content-Type': 'text/plain',
      'Allow': 'GET, POST'
    });
    res.end('Method Not Allowed');
  }
});

const port = 3000; // You can change this port number if needed
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});