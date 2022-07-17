'use strict';

/**
 * High-level: Abstractions that automatically manage resources, but programs won't be most optimized
 * 
 * Garabge-Collected: Automatically remove old/unused objects from memory
 * 
 * Interpreted/Just-in-time compiled: Processesor only understand 0s and 1s, abstraction to machine code
 * through compiling
 * 
 * Multi-paradigm: A paradign is an approach of structuring code, which will direct your coding style 
 * and technique. Procedural programming, object oriented programing, and functional programing.
 * 
 * ProtoType Based Object-Oriented: Create array from blueprint (prototype) which contains all methods
 * and we can inherit methods to use them on arrays
 * 
 * First-class Functions: Functions are simply treated as variables and passed into other functions
 * then return them from functions.
 * 
 * Dynamic: No data types to variables, data type of variable is automatically changed.
 * 
 * Single-Threaded: JavaScript runs in one single thread, so it can only do one thing at a time.
 * 
 * Non-blocking event loop: We want non-blocking behavior, through using an event loop: this takes long running 
 * tasks, and executes them in the "background" and puts them in the main thread once they are finished.
 */

/**
 * Javascript engine always contains a call stack and a heap. Call stack is where code is executed
 * and Heap is where objects are stored in memory
 * 
 * Compilation: Entire code is converted into machine code at once, and written to a binary file
 * that can be executed by a computer.
 * code -> portable file -> program running (can happen way after compilation)
 * 
 * Interpretation: Interpreter runs through the source code and executes it line by line.
 * code -(execution line by line)-> program running
 * 
 * Just-in-time (JIT) compilation: Entire code is converted into machine code at once then
 *  executed immediately.
 * code -> machine code now -> program running (happens immediately)
 */

/**
 * Top-level Code is code that is not inside of functions
 * 
 * Functions should only be executed when they are called
 * 
 * Execution Context: Environment where javascript is executed
 * Creation of global execution context (for top-level code)
 * Execution of top level code: inside the global EC
 * Execution of functions and waiting for callbacks, for each function, a new execution context is created.
 * 
 * Execution Context has variable environment, scope chain, and 'this' keyword.
 * Execution Context, arrow functions has no arguement object, and generated during creation
 * phase, right before execution.  
 * 
 */

/**
 * Scoping: How our program variables are organized and accessed 
 * Lexical Scoping: Scoping is controlled by placement of functions and blocks in the code
 * Scope: Space or environment in which a certain variable is declared (variable environment
 * in case of functions). There is a global scope, function scope, and block scope ;
 * Scope of variable: Region of our code where a certain variable can be accessed.
 * 
 * Global Scope: Outside any function block, variables declared in global scope are accessible everywhere.
 * Function Scope: Variables are accessible only inside function, NOT outside, also called local scope.
 * Block Scope: Variables (only const and let variables) are only accessible inside of a block.
 * You can use variables from the parent scopes/previous scope.
 * Var is only function scoped.
 */

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    function printAge() {
        let output = `${firstName} You are the ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Steven'; 
            //If variable is already in current scope then it will be used, same name as global variable
            const str = `Oh, you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
            output = 'NEW OUTPUT!';
        }
        // console.log(str) doesnt work outside of block scope b/c const and let are block scoped
        console.log(millenial); //var is function scoped so it will work outside of if block
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);

/**
 * Hoisting: Makes some types of variables accessible in code before they are declared. "Variables lifted"
 * to the top of their scope.
 */

// var variable hoisted to undefined
console.log(me);
// let variable is TDZ 
// console.log(job);
// const variable is TDZ 
// console.log(year);

var me = 'Jonas'
let job = 'teacher';
const year = 1991;

// Functions

console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

// Functions are hoisted
function addDecl(a, b){
    return a + b;
}

// Expressions/Arrow functions are defined with const so it is in TDZ
// If defined as var, they will be undefined.
const addExpr = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example
// Reason the if statement works is because var was declared before so it is hoisted to undefined when using 
// the if statement, therefore it is a false value and the function will print. 
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// Varibles declared with 'var' will be declared on the window object
console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

/**
 * 'this' keyword: Special variable that is created for every execution context (every function). Takes the 
 * value of (points to) the "owner" of the function in which the this keyword is used.
 * 
 * 'this' is NOT static, It depends on how the function is called, and its value is only assigned when the function is actually called.
 * 'this' references the object that is calling the method (ex: a function).
 * 'this' is undefined in simple function called.
 * 'this' references surroudings when inside an Arrow Function because Arrow Functions don't get their own 'this' keyword.
 * 'this' does NOT point to the function itself, and also NOT its variable environment.
 * 
 */

// console.log(this);

// Function 'this' keyword is undefined
const calcAge1 = function(birthYear){
    console.log(2037 - birthYear);
    // console.log(this);
}
calcAge1(1991);

// Arrow Function 'this' keyword references of the parent scope
const calcAgeArrow = birthYear =>{
    console.log(2037 - birthYear);
    // console.log(this);
}
calcAgeArrow(1980);

// This points to 'jonas' object which is what is calling the method (function)
const jonas = {
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037-this.year)
    }
}
jonas.calcAge();

const matilda = {
    year: 2017,
};

// 'this' keyword always points to the object that is calling the method
// so we create a calcAge method inside object matilda, since it uses 'this'
// the method will point to the object matilda.
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

/* Since the 'f' function has no object the 'this' keyword doesnt point to anything
 Its just a regular function call*/
// const f = jonas.calcAge;
// f();

/**
 * Regular Functions VS. Arrow Functions
 * 
 * -When using Regular Functions, 'this' references object literal
 * -When using Arrow Function, because no code block, 'this' references parent(in this case
 *  global scope).
 * -So when dealing with functions inside of functions, first method is regular function
 *  inside object literal so the 'this' keyword references object, then for second method
 *  inside first method we can use Arrow function which allows us to use 'this' to reference 
 *  parent scope (which is regular function) so we can use the 'this' keyword from parent scope
 */


// var firstName1 = 'Matilda';

// Object literal, not a code block
const jonasObject = {
    firstName1: 'Jonas',
    year: 1991,
    calcAge: function (){
        console.log(this);
        console.log(2037 - this.year);
        
        // SOLUTION 1
        // const self = this; //self or that
        // /* Because the function is inside of a method and not an object,
        //    the rule states that functions with 'this' keyword are undefined*/
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // }

        // SOLUTION 2
        const isMillenial =  () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName1}`);
    },
}
jonasObject.greet();
jonasObject.calcAge();

// Also 'arguments' keyword only stores in array for regular functions, not arrow functions
const addExpr1 = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr1(2, 5);
addExpr1(2, 5, 8, 12);

const addArrow1 = (a, b) => {
    console.log(arguments);
   return a + b
};
//addArrow1(2, 5, 8);

/**
 * Primatives vs Objects
 * -Primatives: Number, String, Boolean, Undefined, Null, Symbol, BigInt
 * -Objects: Object literal, Arrays, Functions, etc.
 * -Primatives stored in call stack, Objects stored in the heap
 * -Equals sign basically points to memory address location
 * -Objects are on the heap, so using '=' on a variable points to a memory
 *  location, the memory location stores a value (heap address) of the object 
 *  that is then referenced. 
 */

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me2 = {
    name: 'Jonas',
    age: 30,
};

// Doesn't copy object, just creates a new variable that points to same object
const friend = me2;
friend.age = 27;
console.log(`Friend: `, friend);
console.log(`Me`, me2);

/**
 * Primatives vs Objects in Practice
 */

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica  = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

// We cannot change object, assigning a new object to it cannot be done because of const,
// This effect would take place in the stack not the heap
// marriedJessica = {};

// Copying Objects
const jessica2  = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

// Create a new object called jessicaCopy to assign empty object to already created object
// Shallow Copy, only copy properties, not other data structures/objects
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
// console.log('Before Marriage:', jessica2);
// console.log('After Marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);