'use strict';

///////////////////////////////////////
// BANKIST APP 

//Data
const account1 = {
    owner: 'Doan nguyen',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3450, -150, 3000, -3250, -1300, 750, -500],
    interestRate: 1.5, // %
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Winlliams',
    movements: [200, -250, 3500, 200, 50, -10, 80, -800],
    interestRate: 0.7, // %
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smidth',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1, // %
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];


// Elenments
const labelWelcome = document.querySelector('.welcome');
const labelDAte = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.balance_value--in');
const lableSumOut = document.querySelector('.balance_value--out');
const labelSumInterest = document.querySelector('.balance_value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovemts = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnCose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.form__btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.login__input--to');
const inputTransferAmount = document.querySelector('.login__input--amount');
const inputLoanAmount = document.querySelector('.login__input--loan--amount');
const inputCloseUsername = document.querySelector('.login__input--user');
const inputClosePin = document.querySelector('.login__input--pin');


///////////////////////////////////////////////////
/// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['VND', 'Việt Nam Đồng'],
])

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////






// // // // Video 142 s11

let arr = ['a', 'b', 'c', 'd', 'e'];


// Slice
console.log(arr.slice(2)); //['c', 'd', 'e']
console.log(arr.slice(2,4)); // ['c', 'd']
console.log(arr.slice(-2)); //  ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); //  ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// Splice
// Search: mdn array aplice developer.mozilla.org
arr.splice(-1); console.log(arr); //['a', 'b', 'c', 'd']
arr.splice(1, 2); console.log(arr); // ['a', 'd']


// Reverse : Đảo ngược
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //  ['f', 'g', 'h', 'i', 'j']
console.log(arr2);  // ['f', 'g', 'h', 'i', 'j']

// Concat : Nối 2 mảng
const letters = arr.concat(arr2);
console.log(letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] 
console.log(...arr, ...arr2); //a b c d e f g h i j

// Join : Nối
console.log(letters.join(' - ')); 
//a - b - c - d - e - f - g - h - i - j