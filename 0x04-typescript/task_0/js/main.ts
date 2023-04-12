interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const firstStudent: Student = {
  firstName: 'Kwabena',
  lastName: 'Bobie',
  age: 25,
  location: 'Accra'
 }
const secondStudent: Student = {
  firstName: 'Kojo',
  lastName: 'Rashford',
  age: 22,
  location: 'Tamale'
 }

const studentsList: Student[] = [firstStudent,secondStudent]

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstCell = row.insertCell();
  const secondCell = row.insertCell();
  firstCell.textContent = student.firstName;
  secondCell.textContent = student.location;
});
