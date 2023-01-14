'use strict'

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Foccaia', 'Bruscheeta', 'Garlic Bread', 'Caprese Salab'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri:{
            open: 11,
            close: 23,
        },
        sat:{
            open: 0, //Open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '22:00',address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your declicious pasta width ${ing1}, ${ing2} and ${ing3}`);
    }
};


const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Toán tử Spread
const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Coppy arr : sao chép mảng
const mainMenuCopy = [...restaurant.mainMenu];

// Nối 2 mảng ( từ 2 trở lên )
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

//Lặp lại là: arrays, strings, maps, sets không phải obj(đối tượng)
const str = 'Jonas';
const letters  = [...str, ' ', 'S.'];
console.log(letters);

// Thế giới thực real-world example
const ingredients = [
    // prompt ("Let's make pasta! Ingredient 1?"),
    // prompt ("Ingredients 2?"),
    // prompt ("Ingredients 3?"),
];
console.log(ingredients);


restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);