'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, str) => {
  const namesMr = [];
  for (let i = 0; i < arr.length; i += 1 ) {
    namesMr[i] = str + " " + arr[i];
  }
  console.log(namesMr);
}

addPrefix(names, 'Mr');
