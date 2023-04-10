export default function getStudentByLocation(list, city) {
  return list.filter((item) => item.location === city);
}
