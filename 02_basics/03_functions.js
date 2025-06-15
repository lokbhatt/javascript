/**
 * Function is block of code designed to perform perticular task.
 * JS function is executed when somthing invokes or called.
 * the code inside the function will execute when somthing happen (button click).
 * 
 * the return statement is included inside the function in that case function will stop to execute.
 */
function myFun(a, b) {
    return a + b;
}
let x = myFun(2, 3);
// console.log(x);
/**
 * When to use function() ?
 * when we want to reuse the code 
 * it means code should be used multiple times.
 * and same code can be used with different arguments.
 */

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
let f = toCelsius(110);
// console.log(f);

/**
 * Arrow function:-
 * this is same as function but reduce its syntax.
 * it have both return statemant and normal statement 
 * in return statement we can use {} of that function
 * in normal statement we can use () of that function.
 */

/**
 * Normaal function we can use this but on arrow function we can not use this.
 */

/**
 * Implecit return is those type of return where we can use paranthesis and should not to use return keyword.
 * Explecit return is those type of return where we can use {} and must use return keyword.
 */


// syntax
addTwo = (x, y) => {
    return (x + y);
}
// console.log(addTwo(4,5));


anotherFun = (x1, x2) => (x1 + x2); //we can use here () or should not use.
// console.log(anotherFun(3, 4));

// const a = () => {
//     return "explecit";
// }
// console.log(a());

// const b = () => ("Implecit")
// console.log(b())
const b = () => ({ username: "Lokesh" })
console.log(b())

/**
 * this keyword:-
 * this is also different in arrow function compared to regular function
 * with arrow function no binding of "this", represent owner of function.
 * in regular function "this" keyword used as object.
 */
arrow = () => {
    return this
}
// console.log(arrow());

arrow1 = () => this;
// console.log(arrow1());

// rest operator or spread operator 
function calculateFun(val1, val2, val3, ...num) {
    return num
}
// console.log(calculateFun(2, 4, 6, 5, 6, 9)); //the first three values are stored on val1,val2 and val3 and ...num can assign them in an array.


// use object in function 
let object = {
    name: "lokesh",
    age: 25,
    address: "Darchula"
}

function checkObj(obj) {
    console.log(`my name is ${obj.name} and age is ${obj.age}`);
}
// checkObj(object);

