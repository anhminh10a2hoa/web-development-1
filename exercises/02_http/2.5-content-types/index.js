const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (request, response) {

  //TODO: implement sending responds to requests for XML, TXT, JSON, and */* handling JSON provided as an example.
  const mimeTypes = {
    'text/plain': 'data.txt',
    'application/xml': 'data.xml',
    'application/json': 'data.json',
  };
  const acceptHeader = request.headers['accept'];
  if (acceptHeader === '*/*') {
    // You can use the readFileSendResponse(fileName, contentType, response) function 
    // to read a file and send the response or write your own. It's up to you. :-)
    readFileSendResponse('data.json', 'application/json', response)
  } else if(mimeTypes.hasOwnProperty(acceptHeader)) {
    readFileSendResponse(mimeTypes[acceptHeader], acceptHeader, response)
  } else {
    response.statusCode = 406;
    response.statusMessage = 'Content type not available';
    response.end();
  }
}).listen(3000);

/* 
  * @param {string} fileName - name of the file to be read
  * @param {string} contentType - type of the content to be sent in the response
  * @param {object} response - response object
  */
const readFileSendResponse = (fileName, contentType, response) => {
  fs.readFile(path.resolve(fileName), function (error, file) {
    if (error) {
      response.writeHead(404);
      response.write('An error occured: ', error);
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.write(file);
    }
    response.end();
  })
}