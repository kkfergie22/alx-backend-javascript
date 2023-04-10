export default function updateStudentGradeByCity(students, city, newGrades) {
  const gradedStudents = students.map((student) => {
    // match the grades by their ID
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (matchingGrade) {
      return { ...student, grade: matchingGrade.grade };
    }
    // if no new grade put 'N/A'
    if (!matchingGrade) {
      return { ...student, grade: 'N/A' };
    }
    return student;
  });
  // filter the students by city
  const filteredArray = gradedStudents.filter((gradedStudent) => gradedStudent.location === city);

  return filteredArray;
}
