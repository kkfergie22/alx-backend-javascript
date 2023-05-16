const http = require('http');
const { countStudents } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    const filePath = 'database.csv';
    countStudents(filePath)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  }
});

app.listen(1245);

module.exports = app;
