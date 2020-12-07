// 'use strict';

const countTotalSalary = function (employees) {
  const salariesArray = Object.values(employees);
  let totalSalary = 0;

  // for (let i = 0; i < salariesArray.length; i += 1) {
  //   totalSalary += salariesArray[i];
  // }

  for (const employeeSalary of salariesArray) {
    totalSalary += employeeSalary;
  }
  return totalSalary;
}

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400