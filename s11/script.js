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

const calsDisplaySummary = function(movements){
    const incomes = movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov,0);
        labelSumIn.textContent = `${incomes} EUR`;

        const out = movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
        // lableSumOut.textContent = `${Math.abs(out)} EUR`;

        const interest = movements
        .filter(mov => mov > 0)
        .map(deposits => (deposits * 1.2) / 100)
        .filter((int, i, arr) => {
            console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
        // labelSumInterest.textContent = `${interest} EUR`;
};
// calcDisplaySummary(account1.movements);


const calsDisplayBalance = function (movements){
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    // labelBalance.textContent = `${balance} EUR`
};

calsDisplayBalance(account1.movements);
 

// // console.log(containerMovements.innerHTML);




// // // // // // // Video 151 s11

const createUsernames = function(accs){
    accs.forEach(function(acc){
       accs.username =  acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(' ');
    })
};
// const user = 'Nguyen Van Doan'; //stw 

createUsernames(accounts);

console.log(accounts);
// console.log(createUsernames('Nguyen Van Doan'));




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


// // // // // // // Video 150 s11


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // const movementUSD = movements.map(function(mov){
// //     return mov * eurToUsd;
// // });

// const movementUSD = movements.map(mov => mov * eurToUsd);


// console.log(movements);
// console.log(movementUSD); //Hàm gọi lại

// const movementsUSDfor =[];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);


// const movementsDescriptions = movements.map((mov, i) =>
//         `Movement ${i+ 1}: You ${mov >0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
//     );
// console.log(movementsDescriptions);

// // // // // // // Video 152 s11
const deposits = movements.filter(function (mov){
    return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements)if(mov > 0){
    depositsFor.push(mov);
}
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


// // // // // // // Video 153 s11

console.log(movements);

// //  accumulator -> snowball
// const balance = movements.reduce(function (acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`);
//     return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements){
    balance2 += mov;
}
console.log(balance2);

// Maxium value
const max = movements.reduce((acc, mov) => {
    if( acc > mov) return acc;
    else return mov;
}, movements[0]);
console.log(max);



// // // // // // // // Video 154 s11
// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age *4));
//     const adults = humanAges.filter(age => age >= 18);
//     console.log(humanAges);
//     console.log(adults);

//     // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//     const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//     // 2 3. (2+3)/2 === 2/2 + 3/2 = 2.5 

//     return average;
// };


// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);





// // // // // // // // Video 155 s11
const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
    .filter(mov => mov > 0)
    .map((mov, i, arr) => {
        //console.log(arr);
       return mov * eurToUsd
    })
    // .map(mov => mov * eurToUsd)
    .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


// // // // // // // // // Video 156 s11
// const calcAverageHumanAge2 = function (ages) {
//     const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age *4));
//     const adults = humanAges.filter(age => age >= 18);
//     const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

//     return average;
// };

// const calcAverageHumanAge =ages => ages
// .map(age => (age <=2 ? 2 * age : 16 + age *4))
// .filter(age => age >= 18)
// .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// //adults.length

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// // // // // // // // // Video 157 s11 - Phương thức lặp lại trên mảng Find
const firstWidthrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWidthrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);