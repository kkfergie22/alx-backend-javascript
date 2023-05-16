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
      console.log(`Number of students: ${NUMBER_OF_STUDENTS.length}`);
      console.log(`Number of students in CS: ${fieldCS.length}. List: ${firstNameCS.join(', ')}`);
      console.log(`Number of students in SWE: ${fieldSWE.length}. List: ${firstNameSWE.join(', ')}`);
      resolve();
    });
  });
}

module.exports = countStudents;
