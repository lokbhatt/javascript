/**
 * Objects are nothing but simply says that real time object.
 * Object are named index where we cant access its length property,
 * Normaly says that object are everything simply we learn object then we learn JS clearly.
 * Javascript object contains built-in property which is called prototype,
 * the prototype itself called object where each prototype conatins another prototype.
 */

let obj1 = {
    "name": "Lokesh",
    "age": 25,
    "caste": "bhatt"
} // simply create object using object literal

// console.log(obj1); // it can print object key value pair inside {}.
// console.log(typeof obj1); // provide type of object which is object also.



// create object using new keyword
let obj2 = new Object();
obj2.firstName = "LokeshRaj";
// console.log(obj2);

// we can use array or functgion inside object.
let obj3 = {
    "firstname": "lal",
    "lastname": "bahadur,",
    "age": 24,
    "array": ['name', 'age'],
    "fullname": function (){
        return this.firstname +" "+this.lastname;
    }
}
console.log(obj3.fullname());

/**
 * Object constructor:-
 * Constructor is the special function or method when we create new object 
 * then call the function automatically.
 */
function myConstructor(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
}
// now create ct as:-
const myConst = new myConstructor("Lokesh","25","Darchula");
// console.log(myConst); // which can print object format of constructor function.

/**
 * we can add method to an constructor if any value could be change there.
 */
myConst.changeName = function(name){
    this.name = name
}
myConst.changeName("Aakash") // execute the function changeName()
console.log(myConst.name);

