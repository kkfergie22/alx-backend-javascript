export default function createIteratorObject(report) {
  const arr = [];
  for (const key of Object.keys(report.allEmployees)) {
    for (const value of report.allEmployees[key]) {
      arr.push(value);
    }
  }
  let idx = 0;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (idx < arr.length) {
            const value = arr[idx];
            idx += 1;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
