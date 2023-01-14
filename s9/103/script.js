'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Foccaia', 'Bruscheeta', 'Garlic Bread', 'Caprese Salab'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Chuyển đổi các biến
// const temp  = main;
// main = secondary;
// secondary = temp;
// console.log =(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

// Cách chúng ta nhận 2 giá trị trả về một hàm
const [starter, mainCourse] = (restaurant.order(2,0));
console.log(starter, mainCourse);


// 2 mảng lồng nhau
const nested = [2,4,[5,6]];
// const [i, ,j] = nested;
// console.log(i, j);

// Cấu trúc hủy lồng nhau
const [i, , [j,k]] = nested;
console.log(i,j,k);

// Các giá trị mặc định
const [p = 1, q =1, r= 1] = [8,9];
console.log(p,q,r);
