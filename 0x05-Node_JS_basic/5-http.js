const http = require('http');

const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const NUMBER_OF_STUDENTS = content.split('\n').slice(1, -1);
      const fieldSWE = NUMBER_OF_STUDENTS.filter((item) => item.includes('SWE'));
      const firstNameSWE = NUMBER_OF_STUDENTS.filter((item) => item.includes('SWE')).map((item) => item.split(',')[0]);
      const fieldCS = NUMBER_OF_STUDENTS.filter((item) => item.includes('CS'));
      const firstNameCS = NUMBER_OF_STUDENTS.filter((item) => item.includes('CS')).map((item) => item.split(',')[0]);
      result = `Number of students: ${NUMBER_OF_STUDENTS.length}\n` + `Number of students in CS: ${fieldCS.length}. List: ${firstNameCS.join(', ')}\n` + `Number of students in SWE: ${fieldSWE.length}. List: ${firstNameSWE.join(', ')}\n`;
      resolve(result);
    });
  });
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const data = await countStudents(process.argv[2]);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`This is a list of our students\n${data}`);
  }
});

app.listen(1245);

module.exports = app;
