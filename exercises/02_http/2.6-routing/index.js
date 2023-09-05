const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  // Get the path part of the URL
  const urlPath = request.url;

  // Route requests based on the URL path
  if (urlPath === '/homer') {
    readFileSendResponse('./homer.html', 'text/html', response);
  } else if (urlPath === '/bradbury') {
    readFileSendResponse('./bradbury.html', 'text/html', response);
  } else if (urlPath === '/') {
    readFileSendResponse('./index.html', 'text/html', response);
  } else {
    // For any other paths, respond with a 404 status
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Requested content not found');
    response.end();
  }
}).listen(3000);

const readFileSendResponse = (fileName, contentType, response) => {
  fs.readFile(fileName, (err, data) => {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.write('File not found');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(data);
    }
    response.end();
  });
}