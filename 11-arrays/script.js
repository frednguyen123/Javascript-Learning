'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// 2 (Create displayMovements)
// 10 (Add sort using v ariable 'mov')
const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';

  // Sort
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements

  movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
};
// displayMovements(account1.movements);

// 3
const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1.movements);

// 4
const calcDisplaySummary = function(acc){
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
  .filter(mov => mov > 0)
  .map((deposit) => deposit * acc.interestRate/100)
  .filter((int, i, arr) => {
    console.log(arr);
    return int >= 1;
  })
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`
};
// calcDisplaySummary(account1.movements)

// 1
const createUsernames = function(accs) {
    accs.forEach(function(acc){
      acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
  // const username = user.toLowerCase().split(' ').map(name => name[0] ).join('');
  // return username;
};
createUsernames(accounts);
// console.log(accounts);

// 7
// Create UI function 
const updateUI = function(acc){
  // Display movements
  displayMovements(acc.movements);
  // Display balance 
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
}

// 5
// Event Handler/Login
let currentAccount;

btnLogin.addEventListener('click', function(e){
  // Prevent default action of form submitting 
  e.preventDefault();
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100
    // console.log('LOGIN')
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

    // // Display movements
    // displayMovements(currentAccount.movements);
    // // Display balance 
    // calcDisplayBalance(currentAccount);
    // // Display summary
    // calcDisplaySummary(currentAccount);
  }

// 6
// 
  btnTransfer.addEventListener('click', function(e){
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    // console.log(amount, receiverAcc);
    inputTransferAmount.value = inputTransferTo.value = '';

    if(amount > 0 && 
      receiverAcc &&
      currentAccount.balance >= amount && 
      receiverAcc?.username !== currentAccount.username)
    {
      // Transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      // Update UI
      updateUI(currentAccount);
    }

  });
  
});

// 9
// Loan Some Method
btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.10)){
    //  Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
})

// 8
// Close Account
btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username && 
     Number(inputClosePin.value) === currentAccount.pin)
  {
    
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Returns first index of the conditional that is true
    console.log(index);

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
})

// 10 (Continued)
let sorted = false; 
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})



// const user = 'Steven Thomas Williams'; // stw
// const username = user.toLowerCase().split(' ').map(name => name[0] ).join('');
// console.log(username);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/**
 * SIMPLE ARRAY METHODS
 * Slice, Splice, Reverse, Concat, Join
 */

// SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2,4)); // End Parameter is not included
console.log(arr.slice(-2)); // Last element of array starts at the end
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // Shallow Copy

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr)
arr.splice(1, 2)
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e']; 
const arr2 = ['j', 'i', 'h', 'g', 'f']; 
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '))

/**
 * 'AT' METHOD
 */
const array = [23, 11, 64]
console.log(array[0]);
console.log(array.at(0));

// Getting last array element
console.log(array[array.length - 1]);
console.log(array.slice(-1)[0]);
console.log(array.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

/**
 * FOR EACH METHOD
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for (const[i, movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  }
  else{
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----FOREACH----')
// First Parameter: current element
// Second Parameter: current index 
// Third Parameter: array we're looping
movements.forEach(function(movement, index, array) {
  if(movement > 0){
    console.log(`Movement ${index + 1} You deposited ${movement}`);
  }
  else{
    console.log(`Movement ${index + 1} You withdrew ${Math.abs(movement)}`);
  }
})
// You cannot break out of forEach Loop
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

/**
 * FOR EACH METHOD WITH MAPS/SETS
 */

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})

// Set (Key and values are the same using forEach on sets)
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in knowing 
whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy 
if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow 
   copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") 
   or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
let checkDogs = function(dogsJulia, dogsKate){
  let dogsJuliaCorrected = ([...dogsJulia]); //Create shallow copy 
  dogsJuliaCorrected = dogsJuliaCorrected.slice(1, 5);
  dogsJuliaCorrected.splice(-2);
  console.log(dogsJuliaCorrected);

  let combinedDogs = [...dogsJuliaCorrected, ...dogsKate];
  console.log(combinedDogs);
  combinedDogs.forEach(function(dog, index) {
    if(dog >= 3){
      console.log(`Dog number ${index + 1} is an adult and is ${dog} years old`);
    }
    else{
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  })

}
console.log(checkDogs(dogsJulia,dogsKate));

/**
 * DATA TRANSFORMATIONS
 * Map, Filter, Reduce
 * Map: Returns new array containing results of operation on all elements
 * Filter: Returns new array with elements that pass condition
 * Reduce: Reduces array elements ot a single value (adding elements together)
 */

// MAP
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov){
  return mov * eurToUsd;
})
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = []
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsUSDArrow = movements.map((movement) => movement * eurToUsd);
console.log(movementsUSDArrow);

const movementDescriptions = movements.map((mov, i, _) => {
  // `Movement ${i + 1} You ${mov > 0 ? 'deposited' : ''} ${Math.abs(mov)}`
  if(mov > 0){
    return `Movement ${i + 1} You deposited ${mov}`;
  }
  else{
    return `Movement ${i + 1} You withdrew ${Math.abs(mov)}`;
  }
})

console.log(movementDescriptions);

// FILTER 
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const depositsFor = [];
for (const mov of movements){
  if (mov > 0){
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// REDUCE

// accumulator -> SNOWBALL
const balance1 = movements.reduce(function(acc, cur, i, arr){
  console.log(`Iteration ${i}: ${acc}`)
  return acc + cur;
}, 0); //0 = starting value of accumulator
console.log(balance1);

let balance2 = 0;
for(const mov of movements) balance2 += mov;
console.log(balance2);

const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0); //0 = starting value of accumulator
console.log(balanceArrow);

// Maximmum value
const balanceMax = movements.reduce(function (acc, mov) {
  if (acc > mov){
    return acc;
  }
  else{
    return mov;
  }
}, movements[0]);
console.log(balanceMax);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to 
human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, 
   humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that 
   are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges
   how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const ages = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function (ages){
  const humanAge = ages.map(function(dogAge){
    if (dogAge <= 2){
      return dogAge * 2
    }
    else{
      return (16 + dogAge * 4);
    }
  });
  console.log(humanAge);

  const dogs18 = humanAge.filter((age) => age >= 18);
  console.log(dogs18);

  const adultDogs = dogs18.reduce((acc, dogs) => acc + dogs, 0)
  console.log(adultDogs);

  let averageAdultDog = adultDogs / dogs18.length
  console.log(averageAdultDog)
}
calcAverageHumanAge(ages);

/**
 * CHAINING METHODS
 */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// Pipline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map(mov => mov * eurToUsd)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const ages2 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge2 = function (ages){
  const humanAge = ages
  .map((dogAge) => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
  // console.log(humanAge);
  .filter((age) => age >= 18)
  // console.log(dogs18);
  .reduce((acc, dogs, i, arr) => (acc + dogs / arr.length), 0)
  // console.log(adultDogs);

  console.log(humanAge);
}
calcAverageHumanAge2(ages);

/**
 * FIND METHOD
 * First element that satisfy the condition, unlike filter which returns the entire array
 */

const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

/**
 * FIND INDEX METHOD
 * Returns first index of the conditional that is true
 */


/**
 * SOME/EVERY 
 */
console.log(movements);

// Equality Check: if there is any value -130 than true
console.log(movements.includes(-130));

// SOME
// Check Any Condition: if there is any value that meets condition than true
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
// If every element passes the condition than true, else false
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0))

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

/**
 * FLAT 
 * FLATMAP
 */

// FLAT
const arrFlat = [[1,2,3],[4,5,6],7,8];
console.log(arrFlat.flat());

const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat(2));

// Create use map to create an array of account arrays
// Then use flat to put them all into one array
// Finally, use reduce to add up all the elements inside the array
/* const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0); */

// Using Chaining
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

//FLATMAP
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

/**
 * SORTING ARRAYS
 */

// STRINGS
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
// Mutates original array
console.log(owners);

// NUMBERS
console.log(movements);
// Sort does the sorting based on strings 
// console.log(movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b){
//     return 1;
//   }
//   if(b > a){
//     return -1;
//   }
// })

movements.sort((a,b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b){
//     return -1;
//   }
//   if(b > a){
//     return 1;
//   }
// })

movements.sort((a,b) => b - a);
console.log(movements);

/**
 * Creating and Fill Arrays
 */

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5)); Doesnt work
// x.fill(1);
// x.fill(1, 3); //Start Parameter is index 3
x.fill(1, 3, 5); //End Parameter is index 5
console.log(x);

// Array.from
const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);


labelBalance.addEventListener('click', function(){
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
    );
  console.log(movementsUI);

  // Also puts these nodes into an array using spread operator
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
})

/**
 * ARRAY METHODS PRACTICE
 * 
 */

const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2
// const numDeposits1000 = account
// .flatMap(acc => acc.movements)
// .filter(mov => mov > 1000).length;

const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
// .reduce((count, cur) => cur >= 1000 ? count + 1 : count , 0);
.reduce((count, cur) => cur >= 1000 ? ++count : count , 0);
console.log(numDeposits1000);

// ++ operator adds to the variable but returns the orignial variable
let a = 10;
 console.log(a++);
 console.log(a);

//  Prefix ++ operator
let b = 10;
console.log(++b);
console.log(b);

// 3 Create object based on reduce method
const sums = accounts
.flatMap(acc => acc.movements)
.reduce((sums, cur) => {
  cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
  return sums;
}, {deposits: 0, withdrawals: 0});
console.log(sums);

// 4
// this is a nice title => This Is a Nice Title
const convertTitleCase = function(title){
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => exceptions.includes(word) ?  word : capitalize(word)
  )
  .join(' ');
  return titleCase;
}
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. 
   Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to 
   find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1
dogs.forEach(function(dog, index, array) {
  dog.recFood = dog.weight ** 0.75 * 28;
  console.log(dog.recFood);
});

// 2
dogs.forEach(function(dog, index, array){
  if (dog.owners.includes('Sarah')){
    const recommendedFood = dog.weight ** 0.75 * 28;
    if(dog.curFood > recommendedFood){
      console.log(`${dog.curFood} > ${recommendedFood} Too Much Food`);
    }
    else{
      console.log(`${dog.curFood} < ${recommendedFood} Too Little Food`)
    }
  }
});
// console.log(dogs.at(0).owners);

// 3
const ownersEatTooMuch = dogs.filter(dog => {
  const recommendedFood = dog.weight ** 0.75 * 28;
  if(dog.curFood > recommendedFood){
    return dog;
  }
})
.flatMap(dog => dog.owners)

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => {
  const recommendedFood = dog.weight ** 0.75 * 28;
  if(dog.curFood < recommendedFood){
    return dog;
  }
})
.flatMap(dog => dog.owners)
console.log(ownersEatTooLittle);

// 4  
// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6
console.log(dogs.some(dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1));
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;


// 7
console.log(dogs.filter(checkEatingOkay))

// 8
const dogsSorted = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(dogsSorted);

