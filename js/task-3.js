// 'use strict';

const findBestEmployee = function (employees) {
  const employeesArray = Object.keys(employees);
  const employeeValuesArray = Object.values(employees);

  const bestEmployeeValue = Math.max(...employeeValuesArray);

  for (let i = 0; i < employeeValuesArray.length; i += 1) {
    if (bestEmployeeValue === employeeValuesArray[i]) {
      let bestEmployee = employeesArray[i];
      return bestEmployee;
    }
  }
}

// НИЖЕ ЗАКОММЕНТИРОВАН ВТОРОЙ ВАРИАНТ РЕШЕНИЯ

// const findBestEmployee = function (employees) {

//   const employeesArray = Object.keys(employees);
//   const employeeValuesArray = Object.values(employees);

//   let bestEmployeeValue = 0;
//   let bestEmployee = '';

//   for (const employee of employeesArray) {
//     if (employees[employee] > bestEmployeeValue) {
//       bestEmployeeValue = employees[employee];
//       bestEmployee = employee;
//     }
//   }

//   return bestEmployee;
// }

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux