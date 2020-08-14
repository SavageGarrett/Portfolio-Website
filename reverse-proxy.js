var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

proxy.on('error', function (error, req, res) {
  var json;
  console.log('proxy error', error);
  if (!res.headersSent) {
      res.writeHead(500, { 'content-type': 'application/json' });
  }

  json = { error: 'proxy_error', reason: error.message };
  res.end(JSON.stringify(json));
});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  console.log(req.headers.host)
  try {
    proxy.web(req, res, { target: 'http://68.66.193.21:8081' });
  } catch (error) {
    
  }
  
});



console.log("listening on port 80")
server.listen(80);