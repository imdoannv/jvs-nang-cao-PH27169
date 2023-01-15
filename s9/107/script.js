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
    },
    
    orderPizza: function (mainIngredient, ...otherInggredients) {
        console.log(mainIngredient);
        console.log(otherInggredients);
    }
};

console.log('---------------- OR --------------');

// Use any data type, return Any data type, short-circuiting
console.log(3 || 'Jona');
console.log('' || 'Jona');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);


restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---------------- AND --------------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

// Ví dụ thực tế Practical example
if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


// Toán tử OR sẽ trả về giá trị trung thực đâu tiên của tất cả các toán hạng hoặc đơn giản là giá trị cuối cùng nếu tất cả giá trị của chúng đều sai(Dùng OR để đặt các giá trị mặc định)
// Toán tử AND sẽ trả về giá trị falsy đầu tiên hoặc giá trị cuối cùng nếu tất cả chúng đều true(Dùng AND để thực thi mã trong toán hạng thứ 2 nếu toán hạng đầu tiên đúng)