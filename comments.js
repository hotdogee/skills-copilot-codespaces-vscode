// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file to the browser.

var http = require('http');
var fs = require('fs');

// Create a web server that listens on port 3000
http.createServer(function (req, res) {
  // Serve the comments.html file to the browser
  fs.readFile('comments.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);