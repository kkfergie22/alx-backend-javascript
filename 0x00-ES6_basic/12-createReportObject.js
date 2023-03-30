export default function createReportObject(employeesList) {
  const empObj = {
    allEmployees: employeesList,
    getNumberOfDepartments(obj) {
      return Object.keys(obj).length;
    },
  };
  return empObj;
}
