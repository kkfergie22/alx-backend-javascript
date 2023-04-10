export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredArray = students.filter((student) => student.location === city);
  const gradeArray = newGrades.map((newGrade) => newGrade.grade);
  const result = filteredArray.map((filteredItem, index) => {
    // eslint-disable-next-line no-param-reassign
    filteredItem.grade = gradeArray[index];
    return filteredItem;
  });
  return result;
}
