'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  // ENHANCED OBJECT LITERALS
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 ENHANCED OBJECT LITERALS
  openingHours,
  
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0, 
    time = '20:00', 
    address,
  }) {
    console.log(`Order received! ${this,this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} 
    at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},
    ${ing2}, and ${ing3}}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};


/**
 * ARRAY DESTRUCTURING
 */

/**
 * Destructuring breaks data structures down to smaller data structures.
 * Break elements from array into separate values
 */

const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// destructures arr allows us to take specific array elements
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

/**
 * can destructure from an object array, we can skip 
 * the second element and go to the third element 
 * by leaving an empty space between first and third 
 * array element separated by commas
 */ 
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// We can switch variables using temp
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2,0));
 
// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

// array inside of another array
const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

// Nested Destructuring
const [i, ,[j, k]] = nested;
console.log(i, j ,k);

// Default Values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);

/**
 * OBJECT DESTRUCTURING
 */

// destructure object properties
// const { name, openingHours, categories } = restaurant; 
// console.log(name, openingHours, categories);

// destrucuture changing variable names from property names
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// can give default value just incase it doesn't exist
const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// have to wrap destructuring inside parenthesis
({a, b} = obj);
console.log(a, b);

// Nested objects
const { fri: {open, close} } = openingHours;
console.log(open, close);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

/**
 * SPREAD OPERATOR
 * We can use this to unpack all array elements at once
 * Use to merge two arrays together or create a shallow copy
 */

// Old Method
const arr1 = [7,8,9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

// New Method
const newArr = [1, 2, ...arr1];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8 ,9);

// Adding to the main menu object property
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

// Iterables: arrays, strings, maps, and sets. Not Objects
// Multiple values separated by a comma are only expected when
// arguments are passed into function or when we build a new array
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// Real-World Example
const ingredients = [
  // prompt('Let\'s make pasta! Ingredient 1?'),
  // prompt('Ingredient 2?'), 
  // prompt('Ingredient 3?')
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// Objects
// Create new object with old object can add more properties
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

// Create object copy and change copy name but not original object name
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/**
 * REST PATTERN AND PARAMETERS
 * DESTRUCTURING
 * Rest packs elements into an array of unused elements
 * Opposite of spread
 * REST used where we would write variable names separated by commas
 * SPREAD used where you would write values separated by commas
 */

// SPREAD, because on the right side of = sign
const array = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

// Right side is SPREAD combining all items into one large array
// Left side is REST, separating the rest of the unused elements into an array
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Objects
// When using REST for objects, object property must be exact, rest of properties are placed in new object
const { sat, ...weekdays1 } = restaurant.openingHours;
console.log(weekdays1);

// 2) Functions
// REST Parameters
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);

const xVar = [23, 5, 7];
add(...xVar);

// Main Ingredient: mushrooms , REST of parameters are placed in a separate array.
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

/**
 * SHORT CIRCUITING
 */

// Use ANY data type, return ANY data type

// Short-circuiting OR: If first value is truthy value, then other opperand wont even be looked at 
// Returns first value because it's truthy
// If first value isn't truthy, it returns falsy value
console.log('---- OR ----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
// Returns 'Hello' short circuits the rest 
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Short-circuiting AND: If first value is falsey value, then other opperand wont even be looked at 
// Returns first value because it's falsey
// If first value is truthy, the operation continues and the last value is returned
console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

// Practical Example
// Checks if exists, if function exists than execute it 
if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Checks if exists, return execution of second operand 
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/**
 * NULLISH COALESCING OPERATOR
 */

//restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

// Nullish: null and undefined (NOT 0 or ''), only null values instead of all falsey values stop operation
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

/** 
 * LOGICAL ASSIGNMENT OPERATORS
 */

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR ASSIGNMENT OPERATOR
// Short-circuiting because 20 is truthy
// rest1.numGuests = rest1.numGuests || 10;
// No Short Circuiting because first value is falsey, output 10
// rest2.numGuests = rest2.numGuests || 10;

// Same as above
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH ASSIGNMENT OPERATOR
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND ASSIGNMENT OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// If truthy, then assign
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
   For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array 
   ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
   ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
   and prints each of them to the console, along with the number of goals that were scored in total 
   (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, 
   WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Destructure
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. REST
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. SPREAD
const allPlayers = [...players1, ...players2];
console.log(allPlayers)

// 4. SPREAD
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Destructuring Objects
const {team1: team1, x: draw, team2: team2} = game.odds;
console.log(team1, draw, team2);

// 6. Spread unpacks array into separate elements
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`)
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller'); 
printGoals(...game.scored)

// 7.
team1 < team2 && console.log('Team 1 is more likely to win ');  
team1 > team2 && console.log('Team 2 is more likely to win ');

/**
 * LOOPING ARRAYS: FOR-OF LOOP
 */

const menuAgain = [...restaurant.starterMenu, ...restaurant.mainMenu];
// item variable is the current element of each iteration
for (const item of menuAgain){
  console.log(item);
};

// Each element is an array with the index and array item itself
// Returns index number and element itself
for(const item of menuAgain.entries()){
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log([...menuAgain.entries()]);

// Using Array Destructuring for-of
for(const [i, el] of menuAgain.entries()){
  console.log(`${i + 1}: ${el}`);
}

/**
 * Enhanced Object Literals
 * LOOK AT OBJECT
 */

/**
 * OPTIONAL CHAINING
 */

if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open)
}

if(restaurant.openingHours.fri){
  console.log(restaurant.openingHours.fri.open)
}

// WITH OPTIONAL CHAINING
// Automatically returns undefined right away once it hits an undefined object property
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {
  //console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // ex) openingHours.mon, openingHours.tue etc.
  console.log(`On ${day}, we open at ${open}`)
}

// Methods
// If exists, then pass in parameters, if not then output second 
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); 
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users1 = [];
const users1 = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// if user exists, then access the name property and print, otherwise print second statement
console.log(users1[0]?.name ?? 'User array empty');

/**
 * LOOPING OBJECTS: OBJECT KEY VALUES, AND ENTRIES
 */

// Object Keys create an Array of three property names
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days`)

// PRINTS EACH ELEMENT OF ARRAY 
// for (const day of Object.keys(openingHours)){
//   console.log(day)
// }

// Same as above 
// for(const day of properties) {
//   console.log(day);
// }

let openStr = `We are open on ${properties.length} days: `
for(const day of properties) {
  openStr+= `${day}, `;
}
console.log(openStr);

// Property VALUES
// Object.values allows you to see the property values 
const values = Object.values(openingHours);
console.log(values);

// Entire object
// Object.entries returns array of object property and property values
const entries = Object.entries(openingHours);
console.log(entries);

// Destructuring [key, value]
for (const [key, { open, close }] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
   (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game2 = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Entries of array + destructure
const playersScored = [...game2.scored.entries()];
console.log(playersScored);
for (const [index, player] of playersScored){
  console.log(`Goal ${index + 1}: ${player}`)
}

//2. Values of object
const odds = Object.values(game.odds);
let averageGoals = 0;
for (const odd of odds){
  averageGoals += odd;
} 
averageGoals /= odds.length;
console.log(averageGoals);

// 3. Entries of objects + destructure
for (const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `vicotry ${game[team]}`
  console.log(`Odds of ${teamStr}: ${odd}`);
}


/**
 * SETS
 * A set is a collection of unique values, no duplicates
 * No Indexes and no way of getting values out of a set
 */

// Elements in set are unique and order of elements is irrelevant 
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Jonas'));
// .size not .length
console.log(ordersSet.size);
// .has is similar to .includes
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// 'Garlic Bread' Only added once 
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

// Removes all elements from a set
// ordersSet.clear();

// Iterable
for (const order of ordersSet){
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Can pass in a iterable such as an array
// const staffUnique = new Set(staff);

// Takes all elements out of iterable and puts them in an array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// Find size of unique positions 
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// String is 11 characters long so size is 11
console.log(new Set('jonasschedtmann').size);

/**
 * MAP: FUNDAMENTALS
 */

const rest = new Map();
// .set adds element to the data structure
rest.set('name', 'Classico Italiano');
rest.set('1', 'Firenze, Italy');
console.log(rest.set('2', 'Lisbon, Portugal'));

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21; 
// time > 11 && time < 23 
// rest.get(true)
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arrTest = [1, 2];
rest.set(arrTest, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arrTest));

/**
 * MAP: ITERATION
 */

const question = new Map([
  ['question', 'What is the best programming language in the word?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again!'],
]);
console.log(question);

// Convert Object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app 
console.log(question.get('question'));
for(const [key,value] of question){
  if(typeof key === 'number'){
    console.log(`Answer ${key}: ${value}`)
  }
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const gameEventsSet = [...new Set(gameEvents.values())];
console.log(gameEventsSet);

// 2. 
gameEvents.delete(64);
console.log(gameEvents);

// 3.
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// Exact time
const timeEvent = [...gameEvents.keys()].pop();
console.log(timeEvent);
console.log(`An event happened, on average, every ${timeEvent / gameEvents.size} minutes`);

// 4.
for (const [min, event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/**
 * WORKING WITH STRINGS PART 1
 */

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// Position of char in string
console.log(airline.indexOf('r'));

// Last index of char in string
console.log(airline.lastIndexOf('r'));

// Index of string inside of string, case sensitive
console.log(airline.indexOf('Portugal'));

// Substring starts are index 4
console.log(airline.slice(4));

// Substring between two indexes, stops before index 7, length is 7-4 
console.log(airline.slice(4, 7));

// 0 to the first occurance of ' '
console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Extracts from the end 
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B and E are the middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log('You got the middle seat');
  }
  else {
    console.log('You got lucky')
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));

/**
 * WORKING WITH STRINGS PART 2
 */

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check(comparing) emails
const emailString = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// Trim removes white space from beginning and end of an input value
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(emailString === normalizedEmail);

// Replacing (case sensitive)
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23, Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// Target all occurances globally
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const planes = 'Airbus A320neo';
// True/False if it includes string inside 
console.log(planes.includes('A320'));
console.log(planes.includes('Boeing'));
console.log(planes.startsWith('Air'));

if(planes.startsWith('Airbus') && planes.endsWith('neo')){
  console.log('Part of the NEW airbus family')
}

// Practice Exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board')
  }
  else{
    console.log('Welcome Aboard!');
  }
}
checkBaggage('I have a laptop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

/**
 * WORKING WITH STRINGS PART 3
 */

// Everything is split up by the divider string
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Joins array into a string
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const namesPerson = name.split(' ');
  const namesUpper = [];

  for(const name of namesPerson){
    namesUpper.push(name[0].toUpperCase() + name.slice(1));
    // Other method replaces first char with and upper case first char
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
// Added '+' in the start until it reaches 25 total characters
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+'));

// Example
const maskCreditCard = function(number) {
  // When one opparand is a string, it converts entire element to a string
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}

console.log(maskCreditCard(23452345234525));
console.log(maskCreditCard('23452345234525'));

// Repeat function
const message2 = 'Bad Weather... All Departures Delayed...\n';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${` p `.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);


///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  console.log(rows);
  for(const row of rows){
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)}`);
  }
});



