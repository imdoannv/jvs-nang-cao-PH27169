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

const flight = 'LH234';
const jonas = {
    name : 'Doanf Nguyeenx',
    passport : 24739479284,
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. '+passenger.name;

    if(passenger.passport === 24739479284){
        alert('Checked in');
    }else{
        alert('Wrong passport!');
    }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
