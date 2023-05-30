'use strict';

const Person = function(firstName, birthYear) {
    // console.log(this);
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // // Never create method inside constructor function
    // // Each object will carry this function, not scalable to 100s 
    // this.calcAge = function(){
    //     console.log(2037 - this.birthYear)
    // }
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automactially return {}

const matilda = new Person ('Matilda', 2017);
const jack = new Person ('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';
console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype)

Person.prototype.calcAge = function() {
        console.log(2037 - this.birthYear)
}

jonas.calcAge();
matilda.calcAge();

// .prototypeOfLinkedObject
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

/**
 * Prototypal Inheritance on Built-In Objects
 */

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// 1
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

// 2
Car.prototype.accelerate = function() {
    console.log(`${this.make} going ${this.speed += 10}`);
}

// 3
Car.prototype.brake = function() {
    console.log(`${this.make} going ${this.speed -= 5}`);
}

const bmw = new Car ('BMW', 120);
const mercedes = new Car ('Mercedes', 95);

// 4
bmw.accelerate()
bmw.accelerate()
bmw.brake()
mercedes.brake()
mercedes.brake()
mercedes.accelerate()

/**
 * ES6 Classes
 */

// Class Expression
// const PersonC1 = class{

// }

// Class declaration
class PersonC1 {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    };

    // Instance Methods
    // Method swill be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    };

    get age(){
        return (2037 - this.birthYear)
    }

    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert (`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }

    // Static Method
    static hey(){
        console.log('hey there');
        console.log(this);
    }
}

const jessica = new PersonC1('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonC1.prototype);

// PersonC1.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted (cannot used before declaration)
// 2. Class are first-class citizens (can pass into function and return from function)
// 3. Classes are executed in strict mode

/**
 * Getters and Setters
 */

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest (){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const walter = new PersonC1 ('Walter White', 1965);

/**
 * Static Methods
 */

Person.hey = function() {
    console.log('Hey there');
    console.log(this);
}

Person.hey();

PersonC1.hey();

/**
 * Object.create
 */

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// 1
class CarUS {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }; 

    accelerate() {
    console.log(`${this.make} going ${this.speed += 10}`);
    }

    brake() {
    console.log(`${this.make} going ${this.speed -= 5}`);
    }

    // 2
    get speedUS(){
        return (this.speed / 1.6)
    }

    // 3
    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

const ford = new CarUS('Ford', 120);
console.log(ford.speedUS);
ford.accelerate()
ford.accelerate()
ford.brake()
ford.speedUS = 100;
console.log(ford);

/**
 * Inheritance between "Classes": Constructor Function
 */

const Person1 = function(firstName, birthYear) {

    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person1.prototype.calcAge = function() {
        console.log(2037 - this.birthYear)
}

const Student = function(firstName, birthYear, course){
    Person1.call(this, firstName, birthYear);
    this.course = course;
}

// Linking prototypes
Student.prototype = Object.create(Person1.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student ('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// Copied from earlier
const Car1 = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car1.prototype.accelerate = function() {
    console.log(`${this.make} going ${this.speed += 10}`);
}

Car1.prototype.brake = function() {
    console.log(`${this.make} going ${this.speed -= 5}`);
}

// Constructor function that creates an object inherits from Car1 constructor 
const EV = function(make, speed, charge){
    Car1.call(this, make, speed);
    this.charge = charge;
}
// Link prototypes
EV.prototype = Object.create(Car1.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going ${this.speed} km/h with a charge of ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

/**
 * Inheritance between "Classes": ES6 Classes
 */

class PersonCl {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    };

    // Instance Methods
    // Method swill be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    };

    get age(){
        return (2037 - this.birthYear)
    }

    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert (`${name} is not a full name!`)
    }

    get fullName(){
        return this._fullName;
    }

    // Static Method
    static hey(){
        console.log('hey there');
        console.log(this);
    }
}

class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course){
        // Always needs to happen first because it creates 'this' keyword
        super(fullName, birthYear)
        // Not Mandatory, super creates all arguments passed into constructor
        this.course = course;
    };

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }

    calcAge(){
        console.log(`I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
martha.introduce();
martha.calcAge();

/**
 * Inheritance between "Classes": Object.create
 */
const PersonProto1 = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven1 = Object.create(PersonProto1);

// StudentProto's prototype is PersonProto
const StudentProto1 = Object.create(PersonProto1);

StudentProto1.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto1.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

// Jay Object prototype is StudentProto
const jay1 = Object.create(StudentProto1);
jay1.init('Jay', 2010, 'Computer Science');
jay1.introduce();
jay1.calcAge();

/**
 * Class Example
 */

class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        // Protected Property
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language; 

        console.log(`Thanks for opening an account , ${owner}`);
    }

    // Public Interface (Interaction from user)
    deposit(val){
        this._movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

    _approveLoan(val){
        return true;
    }

    requestLoan(val) {
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }
    // Can get but not change the movements array outside of protected class
    getMovements(){
        return this._movements;
    }
}

const acc1 = new Account ('Jonas', 'EUR', 1111);
console.log(acc1);

// Dont do this
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);

console.log(acc1);
console.log(acc1.pin);

/**
 * Encapsulation: Protected Properties and Methods
 * Using underscore stops outside access, lets people know its a protected class
 */

console.log(acc1.getMovements());
console.log(acc1.pin);

/**
 * Encapsulation: Private Class Fields and Methods
 */

// 1) Public Fields
// 2) Private Fields
// 3) Public methods
// 4) Private methods
// (There is also the static version)

class Account1 {
    // 1) Public Fields (instances)
    locale = navigator.language; 

    // 2) Private Fields (instances)
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        // Protected Property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language; 

        console.log(`Thanks for opening an account , ${owner}`);
    }

    // 3) Public methods
    // Public Interface (Interaction from user)
    deposit(val){
        this.#movements.push(val);
    }

    withdraw(val){
        this.deposit(-val)
    }

    requestLoan(val) {
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
        }
    }
    // Can get but not change the movements array outside of protected class
    getMovements(){
        return this.#movements;
    }

    static helper(){
        console.log(`Helper`)
    }

    // 4) Private methods
    // #approveLoan(val){
    _approveLoan(val){
        return true;
    }
}

const acc2 = new Account1 ('Jonas', 'EUR', 1111);
acc2.deposit(250);
acc2.withdraw(140);
console.log(acc2);
// console.log(acc1.#movements);
// console.log(acc2.#pin);
// console.log(acc1.#approveLoan(100));
Account1.helper();

/**
 * Chaining
 */
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);

