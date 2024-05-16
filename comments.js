// Create web server
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const port = 8000;

const server = http.createServer(function(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const ext = path.parse(pathName).ext;
  const filePath = path.join(__dirname, pathName);

  if (pathName === '/comments') {
    const comments = [
      { name: 'John', comment: 'Hello' },
      { name: 'Jane', comment: 'Hi' },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  }
});