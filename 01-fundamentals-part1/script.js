let js = "amazing";
/* This is a Pop-Up
if(js === "amazing"){
    alert("JavaScript is FUN!");
}
*/
// Console.log outputs to console
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);

// Variable stores string
// Variables always start in lowercase
// Variables in uppercase are used for objects
let firstName = "Jonas";
console.log(firstName);

// Real Constants are in uppercase
let PI = 3.1415;

// Use descriptive user names ex:
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob)

/**
 * Data Types: Object & Primitives
 * Number, String, Boolean, Undefined, Null, Symbol, BigInt
 * Javascript has dynamic typing, data types are automatically determined
 */

let javascriptIsFun = true;
console.log(true);

// Shows data type using 'typeof'
console.log(typeof true)
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof 'Jonas')

// When we want to change an existing variable, we don't have to use 'let'
javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun)

// Example of undefined
let year; 
console.log(year);
console.log(typeof year);
// Reassign
year = 1991;
console.log(typeof year)

// Example of NULL
console.log(typeof null)

/**
 * Let, Const, Var
 * Declaring a Variable
 */
let age = 30;
age = 31 // Reassign variable (mutate)

// Const variables cannot be changed in the future
// Const variables need to be declared, cannot be empty declaration
const birthYear = 1991;
//birthYear = 1990; (cannot be changed)
//const job; (needs to be declared)

// Never use var
var job = 'programmer'
job = 'teacher'

/**
 * Operators
 * Mathematic, Comparison, Logical, Assignment, etc
 */

// Math Operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah)

// 2 ** 3 means w to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3)

const firstNameOperators = 'Fred'
const lastNameOperators = 'Nguyen'
console.log(firstNameOperators + ' ' + lastNameOperators)

// Assignment Operators
let x = 10 + 5 // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--; // x = x - 1;
console.log(x)

// Comparison Operators
console.log(ageJonas > ageSarah) // >, <, >=, <=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18;
console.log(isFullAge)

console.log(now - 1991 > now - 2018) 

/**
 * Operator Precedence 
 * Order of operations
 * Parenthesis, post increment/decrement, logical NOT, Exponents (right to left),
 * Multiplication/Division/Modulus, Add/Subtract, Shift, <= >= > <, equality, logical operators,
 * Assignment Operators
 */

let variable1, variable2;
variable1 = variable2 = 25-10-5;
console.log(variable1, variable2)

const ageJonas1 = now - 1991;
const ageSarah1 = now - 2018;
const averageAge1 = ageJonas1 + ageSarah1 / 2
console.log(averageAge1)

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// let markBMI;
// let johnBMI;

// markBMI = markMass / markHeight ** 2;
// johnBMI = johnMass / johnHeight ** 2;

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI,johnBMI);
// console.log(markHigherBMI);

/**
 * Strings and Template Literals
 * 
 */

const firstName1 = 'Jonas';
const job1 = 'teacher';
const birthYear1 = 1991;
const year1 = 2037;

const jonas = "I'm " + firstName1 + ", a " + (year1 - birthYear1) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName1}, a ${(year1 - birthYear1)} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`)

/**
 * If-Else Statements
 */

const ageDriver = 19;
const isOldEnough = age >= 18

if(isOldEnough){
    console.log(`Sarah can start driving license`)
}
else{
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYearIfElse = 1991;
let century;
if(birthYearIfElse <= 2000){
    century = 20; 
}
else{
    century = 21; 
}
console.log(century)

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markBMI;
let johnBMI;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

if(markBMI > johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's! ${johnBMI}`);
}
else{
    console.log(`John's BMI ${johnBMI} is higher than Mark's! ${markBMI}`);
}

/**
 * Type Conversion and Coercion
 * Type Conversion: Manual
 * Type Coercion: Automatic
 */

// TYPE CONVERSION
// Can convert to number, string, and boolean
// Cannot convert to undefined, NULL
// Can convert from string to number
const inputYear = '1991'; 
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// Invalid Number Type
console.log(Number('Jonas'))

// Can convert from number to string
console.log(String(23), 23);

// TYPE COERCION
// When '+' operation between string and number, converts automatically to string
console.log(`I am ` + 23 + ` years old`)

// Strings are converted to numbers using '-' and '*' and '/' operator
console.log('23' - '10' - 3);
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n) //10

/**
 * Truthy and Falsy Values
 * 5 Falsy Values: 0, '', undefined, null, NaN, false
 */

 console.log(Boolean(0));
 console.log(Boolean(undefined));
 console.log(Boolean('Jonas'));
 console.log(Boolean({}));
 console.log(Boolean(''));

// 0 is Falsy
 const money = 0;
 if(money){
    console.log("Don't spend it all :)")
 }
 else{
    console.log("You should get a job!")
 }

//  height variable will be converted to boolean but since there is no assignment, it is undefined which is falsy
 let height;
 if(height){
    console.log("YAY height is defined")
 }
 else{
    console.log("Height is UNDEFINED")
 }

/**
 * Equality Operators
 * == vs ===
 * == has type coercion 
 * '18' == 18 is true
 * === return true when both are exactly the same, no type coercion 
 * '18' == 18 is false
 */

/*
const agePerson = 18; 
if (agePerson === 18){
    console.log('You just became an adult (strict)')
}
if (agePerson == 18){
    console.log('You just became an adult (loose)')
}

const fav = Number(prompt("What's your favorite number?"));
console.log(fav)
console.log(typeof fav)


if (fav == 23){ //'23' == 23
    console.log('Cool! 23 is an amazing number')
}


if (fav === 23){ //23 === 23
    console.log('Cool! 23 is an amazing number')
}
else if(fav === 7){
    console.log('7 is also a cool number')
}
else if(fav === 9){
    console.log('9 is also a cool number')
}
else{
    console.log('Number is not 23 or 7 or 9')
}

if(fav !== 23){
    console.log('Why not 23')
}
*/

/**
 * Boolean Logic
 * AND, OR, & NOT
 * AND: Both conditions have to be true
 * OR: At least one of the conditions have to be true
 * NOT: Reverses true/false logic
 * 
 */

const hasDriversLicense = true; //A
const hasGoodVision = true; //B
const isTired = false; //C

// if(hasDriversLicense && hasGoodVision){
//     console.log('Sarah is able to drive')
// }
// else{
//     console.log('Someone else should drive')
// }

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sarah is able to drive')
}
else{
    console.log('Someone else should drive')
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. 
   Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, 
            and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
            Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dolphins = 96 + 108 + 89 / 3;
// const koalas = 88 + 91 + 110 / 3;

// const dolphins = 97 + 112 + 101 / 3;
// const koalas = 109 + 95 + 123 / 3;

const dolphins = 97 + 112 + 101 / 3;
const koalas = 109 + 95 + 106 / 3;

console.log(dolphins, koalas)

if (dolphins >= 100 && dolphins > koalas){
    console.log('Dolphins win');
}
else if(koalas >= 100 && dolphins < koalas){
    console.log('Koalas win');
}
else if (dolphins >= 100 && koalas >= 100 && dolphins === koalas){
    console.log('Draw');
}
else {
    console.log('No winner');
}

/**
 * Switch Statements
 * Alternative to Else-If
 */

const day = 'friday';

switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code exampels');
        break;
    case 'friday':
        console.log('Record Videos');
        break;
    case 'saturday':
    case 'sunday': 
        console.log('Enjoy weekend :D');
        break;
    default: 
        console.log('Not a valid day')
}

if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}
else if(day === 'tuesday'){
    console.log('Prepare theory videos');
}
else if(day === 'wednesday' || day === 'thursday'){
    console.log('Write code exampels');
}
else if(day === 'friday'){
    console.log('Record Videos');
}
else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy weekend :D');
}
else{
    console.log('Not a valid day');
}

/**
 * Statements and Expressions
 * Expressions Examples: produce values
 *  3 + 4
 *  1991
 *  true && false && !false
 *  console.log(`I'm ${expression here} years old`)
 * Statement Examples: like sentences that translate actions
 *  const str = '23 is bigger'
 * 
 */


/**
 * Terary Operator
 */

const testAge = 23;
//age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water')
const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)

let drink2; 
if(age >= 18){
    drink2 = 'wine';
}
else {
    drink2 = 'water';
}
console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 
(If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
