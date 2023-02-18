// important file handiling stuff part of file module

const fs = require('fs');
let text = fs.readFileSync('plain.txt','utf-8');
text = text.replace("money", "family");
console.log(text);

console.log('creating a new file...')
fs.writeFileSync('another1.txt', text);


//server side js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`enter html here`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//synchronous or blocking
// =>line By line Execution

//asynchronous or non-blocking
// =>line by line execution not guaranteed 
// => callbacks will fire

const http = require('http');
const fs = require('fs');
const htmlContent = fs.readFileSync('index.html');

// const server = http.createServer((req, res)=>{
  res.writeHead(200, {'Content-type':'text/html'});
  res.end(htmlContent)

// })

server.listen(80, '127.0.0.1', ()=>{
  console.log('Server is running at port 80')
})

//now here if we take port as 80, we dont need to explicitly declare the port
// if taken as 8000, then we need to state the same 


