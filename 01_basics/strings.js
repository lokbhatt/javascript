
const name = "Padam";
const caste = "Kunwar";

console.log(`My name is ${name} and my caste is ${caste}`); // this is nice try to implemtnt string which is called string interpolation.




let intro = {
    name: "Lokesh",
    email: "lok@gmail.com",
    address: "Kathmandu"
}

let str1 = new String("lokesh")
console.log(str1.__proto__); //gives the variable is whic type.


console.log(str1.charAt(2)); // defines which index number contains which value.
console.log(str1.indexOf('l')) //defines the value can contains which index.

const str2= str1.substring(1,4) //used to seperate string from index to given length.
console.log(str2);

const str3 = str1.slice(-4,-1) //except the -ve number it works as shift right to left.
console.log(str3);

const url = "https;//lokesh.com/lokesh%20bhatt";
console.log(url.replace('%20', '-')) // it can replace the whitespaces or any character into given character.
 
////////////////////////////////////////////////***********************////////////////////////////////
