const myArr = [3, 4, 5, 6, 7, 8, 9];
// console.log(myArr[0]); this will shows that item of index of array.
/**
 * In JS arrays always use numbred index
 * The array which contains named index which is called associative array.
 * 
 * Type of array is object, but both are used as seperate use.
 * In object there is named index and in Array there is numbered index.
 */

// array methods:
myArr.push(11)
// console.log(myArr);
// myArr.pop() to remove last element stored on array.
// console.log(myArr);

// myArr.unshift(9) // add new element on begining on the array.
// myArr.shift() // remove the first element from array.
// console.log(myArr);



let array = new Array(23, "lokesh"); // array can store any type of multiple elements.
// console.log(array);

/**
 * Array.toString() method can convert array to a coma seperated string.
 * concat method to merg the element of exising array with newly created array.
 */
const districts = ['darchula', 'baitadi', 'dadeldhura', 'kanchanpur'];
// console.log(districts.toString());
// console.log(districts.at()); // return an indexed element from array.
// console.log(delete districts[0]); // delete leaves undefined holes in array
const wards = [1, 2, 3, 4, 5, 6];
// console.log(wards.concat(districts));
// console.log(districts.concat(distr));

// console.log(districts.copyWithin(2, 0, 3)); // use to copy array element to its index number (startindex, endindex)


/**
 * Flat array is the array which can concat the child array into parent array.
 */
const arr1 = [[1, 2, 3], [2, 3, 4], [4, 6, 7]];
console.log(arr1.flat());




