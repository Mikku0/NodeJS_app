const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

let {parse} = require('querystring');

// http.createServer((req, res) => {
//   const pathname = 'test.html'
//   const filename = path.join(__dirname, 'views', pathname);  

//   fs.readFile(filename, (err, data) => {
//     if (err) {
//       res.writeHead(404, {'Content-type': 'text/html'});
//       return res.end('404 file not found');
//     }
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8080);

// console.log('Server running at http://localhost:8080/');

const htmlForm = `
  <html>
    <head>
      <title>Form</title>
    </head>
    <body>
      <form method="post">
        Name: <input type="text" name="name"> <br>
        Surname: <input type="text" name="surname"> <br>
        email: <input type="text" name="email"> <br>
        <input type="submit" value="Submit"> 
      </form>
    </body>
  </html>
`;

http.createServer((req, res) => {
  let data = "";
  req.on('data', function(chunk) {
    data += chunk;
  });
  
  req.on('end', function () {
    const parsed = parse(data);
    console.log(JSON.stringify(parsed));

    res.writeHead(200);
    res.write(htmlForm);
    res.end();
  });
}).listen(8080);