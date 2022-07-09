/**
 * Strict Mode
 * Strict mode activated with 'use strict', easier to write secure javascript code
 * Avoids accidental bugs/errors, forbids from doing things, and show certain visible errors
 */
'use strict';

let hasDriversLicense = false;
const pastTest = true;

if(pastTest) {
    hasDriversLicense = true;
}
if(hasDriversLicense) {
    console.log('I can drive :D');
}

// These will show errors in console
// const interface = 'Audio';
// const private = 534;
// const if = 23;

/**
 * Functions
 * Code that can be re-used again
 * Calling / running / invoking the function
 */

function logger(){
    console.log(`My Name is Jonas`);
}

logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice
// }

//console.log(fruitProcessor(5,0));
const juice = fruitProcessor(5,0);
console.log(juice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

/**
 * Function Declarations vs Expressions
 * Function Declaration can be called before the function
 * Function Expressions cannot be called before the function
 */

// Function Declaration
console.log(calcAge1(1991));
function calcAge1(birthYear){
    return (2037 - birthYear);
}
const age1 = calcAge1(1991);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear){
    return (2037 - birthYear);
}
const age2 = calcAge2(1991);
console.log(age2);

/**
 * Arrow Functions
 * Shorter form of functon expressions
 * Automatically returned
 */

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age; 
    //return retirement; 
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

/**
 * Functions calling other functions
 */
function cutFruitPieces(fruit) {
    return fruit * 4; 
}

 function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(applePieces, orangePieces);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice
}
console.log(fruitProcessor(2,3));


/**
 * Reviewing Functions
 * Function declaration: Function that can be used before it's declared
 * Function Expression: Essentailly a function value stored in a variable
 * Arrow Function: Great for a quick one-line functions. Has no 'this' keyword
 */
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
 
const yearsUntilRetirement1 = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age; 
    if(retirement > 0){
        return `${firstName} retires in ${retirement} years`;;
    }
    else{
        return `${firstName} has already retired!`;;
    }

    //return retirement; 
}
console.log(yearsUntilRetirement1(1991, 'Jonas'))
console.log(yearsUntilRetirement1(1950, 'Mike'))

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (score1 , score2 , score3) => ((score1 + score2 + score3) / 3);

function checkWinner(avgDolhins, avgKoalas) {
    if(avgDolhins > (2 * avgKoalas)){
        return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`;
    }
    else if (avgKoalas > (2 * avgDolhins)){
        return `Koalas win (${avgKoalas} vs. ${avgDolhins})`;
    }
    else{
        return `No Winner`
    }
}

// Test 1
let averageDolphins = calcAverage(44, 23, 71);
let averageKoalas = calcAverage(65, 54, 49);

console.log(checkWinner(averageDolphins, averageKoalas))

// Test 2
averageDolphins = calcAverage(85, 54, 41);
averageKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(averageDolphins, averageKoalas))

/** 
 * Introduction to Arrays
 */

const friend0 = 'Micheal';
const friend1 = 'Steven';
const friend2 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); // Number of elements in an array
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);

const jonas = ['Jonas', 'Smith', 2037 - 1991, 'teacher', friends];
console.log(jonas)
console.log(jonas.length)

const ageCalc = function(birthYear){
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(ageCalc(years));

const ages1 = ageCalc(years[0]);
const ages2 = ageCalc(years[1]);
const ages3 = ageCalc(years[years.length - 1]);

console.log(ages1, ages2, ages3)

const ages = [ageCalc(years[0]), ageCalc(years[1]), ageCalc(years[years.length - 1])];

console.log(ages)

/**
 * Basic Array Operations
 */

const friendsGroup = ['Micheal', 'Steven', 'Peter'];
// Add Elements
const newLength = friendsGroup.push('Jay');
console.log(friendsGroup);
console.log(newLength);

// Add new element beginning of Array
friendsGroup.unshift('John');
console.log(friendsGroup);

// Remove Elements
friendsGroup.pop();
const popped = friends.pop();
console.log(friendsGroup);
console.log(popped);

// Removes first element and shifts element indexes down
friendsGroup.shift(); 
console.log(friends);

// Index of element 
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// See True/False if elements are included in the array
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

// 'Includes' is strict, no type coercion
friends.push(23);
console.log(friends.includes('23'));

if (friends.includes('Steven')){
    console.log('You have a friend called Steven');
}

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, 
   calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). 
   Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values 
      (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

function calcTip(bill){
    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }
    else{
        return bill * 0.20;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);

/**
 * Introduction to objects
 * 
 */

const jonasArray = [
    'Jonas',
    'Smith',
    2037-1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven']
]

// Object literal syntax
// const jonasObject = {
//     firstName: 'Jonas',
//     lastName: 'Smith',
//     age: 2037-1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// }

/**
 * Dot vs Bracket Notation
 */

 const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven']
}

// Dot Notation
console.log(jonasObject.lastName);
// Bracket Notation
// Can write any expression, can be computed from operation
console.log(jonasObject['lastName']);

// Can be calulated in []
const nameKey = 'Name'
console.log(jonasObject['first' + nameKey]);
console.log(jonasObject['last' + nameKey]);

// When we need to compute property name, use bracket notation,
// Otherwise use Dot Notation

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// Input Variable, because prompt takes in and computes the string input
// console.log(jonasObject[interestedIn]);

// if (jonasObject[interestedIn]){
//     console.log(jonasObject[interestedIn]);
// }
// else{
//     console.log('Wrong Request');
// }

// Adds to the object
jonasObject.location = 'Portugal';
jonasObject['Twitter'] = '@jonassmith';
console.log(jonasObject);

// Challenge
// "Jonas has 3 friends, and his best friend is called Micheal"
console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}`)

/**
 * Object Methods
 * 
 */

const objectJonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // Similar to function expression
    // const calcAge = function (birthYear){
    //     return 2037 - birthYear;
    // }
    // =============================>
    // calcAge: function (birthYear){
    //     return 2037 - birthYear;
    // }

    // this keyword points to objectJonas because it's object calling the method
    // calcAge: function(){
    //     return 2037 - this.birthYear;
    // }

    // Can store the function into a this.age method we created inside the object to reduce runtime.
    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(objectJonas.calcAge(1991));
console.log(objectJonas['calcAge'](1991));
// console.log(objectJonas.calcAge(objectJonas.birthYear));
console.log(objectJonas.calcAge());
// Must call the function first before the object is stored, so calcAge(), then age is stored
console.log(objectJonas.age);
console.log(objectJonas.age);
console.log(objectJonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(objectJonas.getSummary());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
       this.bmi = (this.mass / (this.height * this.height));
       return this.bmi;
    },
};
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
     },
};

// Must call function first before able to use new method created
mark.calcBMI();
console.log(mark.bmi);

if (mark.calcBMI() < john.calcBMI()){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
}
else {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
}


/**
 * Iterations using loops
 * For loops
 * Looping Arrays
 * Breaking and Continuing
 */

for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`)
}

const loopJonasArray = [
    'Jonas',
    'Smith',
    2037-1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
    true
];

// Create empty array
const types = []

for (let i = 0; i < loopJonasArray.length; i++){
    // Reading from jonas array
    console.log(loopJonasArray[i], typeof loopJonasArray[i]);

    // Filling types array
    // types[i] = typeof loopJonasArray[i];

    // Can push to new array
    types.push(typeof loopJonasArray[i]);
}

console.log(types);

const yearsArray = [1991, 2007, 1969, 2020];
const agesArray = [];

for(let i = 0; i < yearsArray.length; i++){
    agesArray.push(2037 - yearsArray[i]);
}
console.log(agesArray)

// Continue and Break
console.log('---ONLY STRINGS---')
for (let i = 0; i < loopJonasArray.length; i++){
    // Reading from jonas array
    if(typeof loopJonasArray[i] !== 'string') continue;
    console.log(loopJonasArray[i], typeof loopJonasArray[i]);
}

console.log('---BREAK WITH NUMBER---')
for (let i = 0; i < loopJonasArray.length; i++){
    // Reading from jonas array
    if(typeof loopJonasArray[i] === 'number') break;
    console.log(loopJonasArray[i], typeof loopJonasArray[i]);
}

/**
 * Looping backwards and loops in loops
 */

 const loopBackwardsJonasArray = [
    'Jonas',
    'Smith',
    2037-1991,
    'teacher',
    ['Micheal', 'Peter', 'Steven'],
];

// loop backwards 4, 3, 2, 1
for (let i = loopBackwardsJonasArray.length-1; i >= 0; i--){
    console.log(i, loopBackwardsJonasArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++){
    console.log(`----Starting Exercise ${exercise}----`)
    for(let rep = 1; rep <= 5 ; rep++){
        console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
    }
}

/**
 * While Loop
 */

 for (let rep = 1; rep <= 10; rep++){
    console.log(`For Loop: Lifting weights repetition ${rep}`)
}

let rep = 0;
while(rep <= 10){
    console.log(`While Loop: Lifting weights repetition ${rep}`);
    rep++;
}

// number between 0 and 6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)
while (dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6){
        console.log(`You rolled a ${dice}, Loop is about to end`);
    };
}

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

let billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tipsArray = [];
let totalsArray = [];

function calcTip(bill){
    if (bill >= 50 && bill <= 300){
        return bill * 0.15;
    }
    else{
        return bill * 0.20;
    }
}

function calcAverageArrays (arr){
    let sum = 0;
    for (let i = 0; i <= arr.length-1; i++){
        sum = sum + arr[i];
    }
    sum = sum / arr.length;
    return sum;
}

for (let i = 0; i <= billsArray.length-1; i++){
    tipsArray.push(calcTip(billsArray[i]));
    totalsArray.push(tipsArray[i] + billsArray[i]);
}

console.log(billsArray);
console.log(tipsArray);
console.log(totalsArray);
console.log(calcAverageArrays(totalsArray));
console.log(calcAverageArrays(tipsArray));
