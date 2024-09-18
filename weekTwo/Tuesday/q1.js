// 1.	Function Definitions:
// o	filterAndSort Function: Create a function called filterAndSort that takes an indefinite number of arguments. The first argument should be a filter function, and the remaining arguments should be numbers. The function should:
// 1.	Use the rest operator to capture all arguments except the first one.
// 2.	Filter the numbers using the provided filter function.
// 3.	Sort the filtered numbers in ascending order.
// 4.	Return the sorted array of numbers.

function filterAndSort(filter, ...numbers) {
  return numbers.filter(filter).sort((a, b) => a - b);
}

const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

console.log(filterAndSort(isEven, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); 
console.log(filterAndSort(isOdd, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));