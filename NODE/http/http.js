const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  console.log('req:',req.url)
  let pathname=url.parse(req.url).pathname;
  console.log("pathname:",pathname)
  let query=url.parse(req.url,true).query;
  console.log("query:",query)
 
    if(pathname === '/'){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write('<h1>Welcome to nodejs</h1>');
        res.end();
    }
    else if(pathname=== '/items'){
        {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(`<h1>Product Name:${query.name}</h1>`);
            res.write(`<h1>Product Name:${query.price}</h1>`);
            res.end();
        }
    }
    else if(pathname==='/about'){
        res.write('Learning MEAN/MERN');
        res.end();
    }
    else {
      //  res.writeHead(404,{'Content-Type':'text/html'});
        res.write('Page Not Found');
        res.end();    
    } 
  
  });

  server.listen('8080');
  console.log('server is now listening at 8080');
