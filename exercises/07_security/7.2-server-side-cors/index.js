const http = require('http');
const port = 3000;
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

  /** TODO: add the required CORS headers 
   * as speciiied in the exercise instructions.
   * You can define your CORS header with something
   * like the following:
   * const headers = {
      'header_1_name': 'header_1_value',
      'header_2_name': 'header_2_value',
      ...
      };
      This syntax enables using the defined CORS headers with  writeHead() method in the TODOs below. See writeHead() method parameters: (https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers).
  */
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, HEAD',
    'Access-Control-Max-Age': '14400', 
  };

  let filePath = path.join(__dirname, 'index.html');
  let stat = fs.statSync(filePath);

  // The three lines of code below, ending with 'res.end(data);',
  // are here to enable testing
  // the server and CORS headers, when you seek to remove
  // the CORS error shown in the browser DevTools.
  //
  //  IMPORTANT! DELETE THE THREE LINES BELOW ENDING WITH 'res.end(data);', 
  //  BUT only after you
  // have already defined a working set of CORS headers above. So,
  // remove the lines after you have completed the TODO above, but 
  // before you start to write your own code for the TODOs below.
  // res.writeHead(200, headers);
  // const data = fs.readFileSync(filePath, 'utf8');
  // res.end(data);
  // Check if the Origin header is set
  if (!req.headers['origin']) {
    res.writeHead(400);
    res.end('Origin header not in the request');
    return;
  }

  // Handle GET and POST HTTP methods
  if (req.method === 'GET' || req.method === 'POST') {
    res.writeHead(200, headers);
    res.end('I was requested using CORS!');
    return;
  }

  // Handle HEAD HTTP method
  if (req.method === 'HEAD') {
    res.writeHead(200, headers);
    res.end();
    return;
  }

  // Handle HTTP methods that are not allowed
  res.writeHead(405, headers);
  res.end('Request used an HTTP method which is not allowed');

  // TODO: check that Origin header is set in all incoming requests
  // You can access the header with req.headers['origin']
  // You can check if a header is present in request headers with if(!req.headers['yourHeaderNameHere']){..


  // TODO: handle GET and POST HTTP methods
  // You can use req.method to access the request method 
  // remember to add CORS headers to response, you can use writeHead() here 

  // TODO: handle HEAD HTTP method, 
  // remember to add CORS headers to response

  // TODO: handle HTTP methods that are not allowed, 
  // remember to add CORS headers to response

  // HINT: remember to use end() method of the response when you are ready to send them. If you are using if-else statements, place 
  // "return;" 
  // as the last line of all if-else branches. 
  // So, something like:
  // if(condition){
  //     ....
  //     response.end();
  //     return;
  // }
  // else if(condition){
  //     ....
  //     response.end();
  //     return;
  // }
  // else{
  //     ....
  //     response.end();
  //     return;
  // }


}).listen(port);