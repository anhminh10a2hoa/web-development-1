const http = require('http');
const url = require('url');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });

  const queryObject = url.parse(request.url, true).query;
  
  // Sanitize the 'addThisText' query parameter using encodeURIComponent()
  const sanitizedAddThisText = encodeURIComponent(queryObject['addThisText']);

  response.write(
    `<!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>XSS alert!</title>
      </head>
      <body>
        <p id="xss">Here be XSS! queryObject['addThisText'] is now: </p>
        ${sanitizedAddThisText}
      </body>
      </html>
    `
  );

  console.log("queryObject['addThisText']: ", queryObject['addThisText']);
  response.end();
}).listen(3000);
