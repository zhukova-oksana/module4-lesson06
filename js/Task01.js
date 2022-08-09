'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filer = (arr1, arr2) => {
  let additionalArray = [...arr1];
  for (let i = 0; i < additionalArray.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (additionalArray[i] === arr2[j]) {
       additionalArray.splice(i, 1);
      }
    }
  }
  return additionalArray;
}

console.log(filer(allStudents, failedStudents));
