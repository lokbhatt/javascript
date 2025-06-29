/**
 * break statement jump out of loop
 * continue statement jump over one iteration in the loop 
 */
// the break statement 
let text =''
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        break;
    }
    text += `the number is ${i} \n`
}
// console.log(text); // stop on the number is 1


// continue statement 
let text1 = ''
for (let i = 0; i < 5; i++) {
    if(i === 2){
        continue;
    }
    text1 += `the number is ${i} \n`
}
// console.log(text1); //skip the number is 2

/**
 * JS Labels:-
 * to label JS elements you preceed the statement with a label name and a colon.
 * break labelName | continue labelName 
 */
let text2 = ''
const heros = ['rajes', 'nikhil', 'biraj', 'ramit', 'aryan'];
list: {
    text2 += `${heros[0]} \n`;
    text2 += `${heros[1]} \n`;
    // break list;
    if (text2) {
        // continue list; //we cant continue here because it can only jump to label of an inclosing iteration.
        break list; 
    } // this is used for better readability.
    text2 += `${heros[2]} \n`;
    text2 += `${heros[3]} \n`;
}
console.log(text2);

