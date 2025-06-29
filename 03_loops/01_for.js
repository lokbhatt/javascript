/**
 * there are several types for loop:-
 * for:- loop through according to iteration 
 * for/in loop throught properties of an object 
 * for/of loop through the value of iterable object
 * while loop through block of code while specific condition is true.
 * do/while loop through a block of code while specific condition is true.
 */

// for loop 
for (let i = 0; i < 10000; i++) {
    // console.log("I Love You");
}
/**
 * here first expression can initialize the variable whch can executed one time before code block is run
 * then the second expression can check the condition the acquired condion match or not.
 * the third expression is increment the variable after execute the code block.
 */

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < i; j++) {
        // console.log("hello");
    }
}

let n = 5;
for (let i = 0; i < 5; i++) {
    let str = "* ";
    // console.log(str.repeat(i));
}

/**
 * for in loop:- 
 * loops through properties of an object
 * property is the key of such iterable object.
 */
let obj = {fname:'Lok', mname:'raj', lname:'bhatt'}
let text ='';
for(let key in obj){
    text += obj[key];
}
// console.log(text);

// for in over Array
const arr = ['lok', 'raj', 'bhatt'];
let text1 = ''
for(let x in arr){
    text1 += arr[x];
}
// console.log(text1);

// foreach loop calls the function once for each array element.

const num = [1,4,6,8,9,89];
let text3= '';
num.forEach(myFun);
function myFun(value, index, array){
    text3 += value;
}
// console.log(text3);

/**
 * for of loops through values of an iterable object.
 * it means the array or object have property->value such as ['lok','raj','bhatt']
 */
const info = ['lokesh','raj','bhatt'];
let text4 = '';
for (const element of info) {
    text4 = element;
}
console.log(text4);
