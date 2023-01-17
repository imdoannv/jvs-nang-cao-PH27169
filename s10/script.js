// // // Video 128 s10


'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers){
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123',2);
// createBooking('LH123',5);

// //undefined bỏ qua hành khách mặc định thành giá trị đầu là 1
// createBooking('LH123', undefined, 100);

// // Video 129 s10

// const flight = 'LH234';
// const jonas = {
//     name : 'Doanf Nguyeenx',
//     passport : 24739479284,
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. '+passenger.name;

//     if(passenger.passport === 24739479284){
//         alert('Checked in');
//     }else{
//         alert('Wrong passport!');
//     }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);





// // // Video 131 s10

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function 
// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed string: ${fn.name}`);
// };

// transformer('JavaScipt is the best!', upperFirstWord);
// transformer('JavaScipt is the best!', oneWord);


// // Js uses callbacks all the time -> gọi mói lúc
// const hight5 = function(){
//     console.log('<3');
// }

// document.body.addEventListener('click', hight5);

// ['Jonas', 'Martha', 'Doan'].forEach(hight5);






// // // Video 132 s10

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas'); //Hey Jonas

// greeterHey('Steven'); //Hey Steven


// greet('Hello')('Doanf'); //Hello Doanf


// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jonas');








// // // // Video 136 s10
// // Biểu thức hàm được gọi ngay lập tức
// const runOnce = function(){
//     console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function(){
//     console.log('This will never run again');
//     const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

// {
//     const isPrivate = 23; //Not use
//     var notPrivate = 46;  // Oke use
// }

// // console.log(isPrivate);
// console.log(notPrivate);




// // // // Video 139 s10 --  finish section 10
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',  function(){
        header.style.color = 'green';
    });
})(); 
