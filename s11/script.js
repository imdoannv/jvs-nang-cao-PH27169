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
const containerMovements = document.querySelector('.movements');

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


/////////////////////////////////////////////////
// // // // // // Video 147 s11
// const displayMovements = function (movements){
//     containerMovements.innerHTML = '';
//     // .textContent = 0
//     movements.forEach(function(mov, i){
//         const type = mov > 0 ? 'deposit' : 'withdrawal';
//         const html = `
        
//             <div class="movements__row">
//                 <div class="movemnts__type movemnts__type--${type}">${i+1} ${type}</div>
//                 <div class="movemnts__value">${mov}</div>
//             </div>
//         `;

//         containerMovements.inserAdjacentHTML('afterbegin', html);
//     });
// };
// displayMovements(account1.movements);

// // console.log(containerMovements.innerHTML);







///////////////////////////////////////////////////
/// LECTURES

// // const currencies = new Map([
// //     ['USD', 'United States dollar'],
// //     ['EUR', 'Euro'],
// //     ['VND', 'Việt Nam Đồng'],
// // ])

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////






// // // // // Video 142 s11

// let arr = ['a', 'b', 'c', 'd', 'e'];


// // Slice
// console.log(arr.slice(2)); //['c', 'd', 'e']
// console.log(arr.slice(2,4)); // ['c', 'd']
// console.log(arr.slice(-2)); //  ['d', 'e']
// console.log(arr.slice(-1)); // ['e']
// console.log(arr.slice(1, -2)); // ['b', 'c']
// console.log(arr.slice()); //  ['a', 'b', 'c', 'd', 'e']
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// // Splice
// // Search: mdn array aplice developer.mozilla.org
// arr.splice(-1); console.log(arr); //['a', 'b', 'c', 'd']
// arr.splice(1, 2); console.log(arr); // ['a', 'd']


// // Reverse : Đảo ngược
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //  ['f', 'g', 'h', 'i', 'j']
// console.log(arr2);  // ['f', 'g', 'h', 'i', 'j']

// // Concat : Nối 2 mảng
// const letters = arr.concat(arr2);
// console.log(letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] 
// console.log(...arr, ...arr2); //a b c d e f g h i j

// // Join : Nối
// console.log(letters.join(' - ')); 
// //a - b - c - d - e - f - g - h - i - j







// // // // Video 143 s11
// // At method 
// const arr = [23, 11, 64];
// console.log(arr[arr.length - 1]);//23
// console.log(arr.at(0)); //23

// // Getting last array element 
// console.log(arr[arr.length -1]);//64
// console.log(arr.slice(-1)[0]);//64
// console.log(arr.at(-1)); //64


// console.log('doan'.at(0)); //d
// console.log('doan'.at(-1)); //n






// // // // // Video 144 s11
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// // for(const movement of movements){
// for(const [i,movement] of movements.entries()){
//     if(movement > 0){
//         console.log(`Movement ${i + 1}: You deposited ${movement}`);
//     }else{
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//         // Math.abs() lấy giá trị tuyệt đối
//     }
// }


// console.log('=================ForEach==============');

// movements.forEach(function(mov, i, arr){
//     if(mov > 0){
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);
//     }else{
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//         // Math.abs() lấy giá trị tuyệt đối
//     }
// });

// // 0: function(200)
// // 1: function(450)
// // 2: function(400)




// // // // // // Video 145 s11

// // MAP
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['VND', 'Việt Nam Đồng'],
// ])

// currencies.forEach(function (value, key, map){
//     console.log(`${key}: ${value}`);
// });

// // SET 
// const currenciesUnique = new Set(['USD', 'VND', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function(value, _, map){
//     console.log(`${value}:${value}`);
// })


// // // // // // // Video 148  s11

// const checkDogs = function (dogsJulia, dogsKate){
//     const dogsJuliaCorrected = dogsJulia.slice();
//     dogsJuliaCorrected.splice(0, 1);
//     dogsJuliaCorrected.splice(-2);
//     // dogsJulia.slice(1, 3);
    
//     const dogs = dogsJuliaCorrected.concat(dogsKate);
//     console.log(dogs);

//     dogs.forEach(function (dog, i){
//         if(dog >= 3){
//             console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
//         }else{
//             console.log(`Dog number ${i+1} is still a puppy`);
//         }
//     });
// };
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


// // // // // // Video 150 s11


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementUSD = movements.map(function(mov){
//     return mov * eurToUsd;
// });

const movementUSD = movements.map(mov => mov * eurToUsd);


console.log(movements);
console.log(movementUSD); //Hàm gọi lại

const movementsUSDfor =[];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);


const movementsDescriptions = movements.map((mov, i) =>
        `Movement ${i+ 1}: You ${mov >0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
    );
console.log(movementsDescriptions);