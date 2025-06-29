/**
 * The while loop can execute the block of code as long as specified condition is true.
 * structure:- 
 * while (condition)
 * { 
 *  //...code bolck to be execute...
 *  increment++
 * }
 */
// let value = ''
// let i=1;
// while (i < 10){
//     value += `the number is ${i}`
//     i++
// }
// console.log(value);

/**
 * do while loop:-
 * is the variant of while loop. Execute the code block once, before checking condition is true.
 * then it will repeat the loop as long as condition is true.
 */

let i=0;
let text = '';
do {
    text += `the number is ${i}`;
    i++;
} while (i < 11);
console.log(text);
