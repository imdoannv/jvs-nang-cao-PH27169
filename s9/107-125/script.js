'use strict'

const weekdays = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]:{
        open: 11,
        close: 23,
    },
    [weekdays[5]]:{
        open: 0, //Open 24 hours
        close: 12+12,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Foccaia', 'Bruscheeta', 'Garlic Bread', 'Caprese Salab'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 enhanced object literals
    openingHours,

    // openingHours: {
    //     thu: {
    //         open: 12,
    //         close: 22,
    //     },
    //     fri:{
    //         open: 11,
    //         close: 23,
    //     },
    //     sat:{
    //         open: 0, //Open 24 hours
    //         close: 24,
    //     },
    // },

    order(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '22:00',address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3){
        console.log(`Here is your declicious pasta width ${ing1}, ${ing2} and ${ing3}`);
    },
    
    orderPizza(mainIngredient, ...otherInggredients) {
        console.log(mainIngredient);
        console.log(otherInggredients);
    },
};
// Video 114 s9

// Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties){
    openStr += `${day},`;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key , values]
for(const [key, {open , close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}


// Video 113 s9
// if(restaurant.openingHours && restaurant.openingHours.mon){
//     console.log(restaurant.openingHours.mon.open);
// }

// // console.log(restaurant.openingHours.mon.open);
// // WITH optinoal chainting
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//     const open =restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0.1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0.1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello"gmail.com'}];
// // const users =[];

// console.log(users[0]?.name ?? 'User array empty');

// if(users.length > 0) console.log(users[0].name);
// else console.log('user array empty');




// Video 111 s9
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()){
//     console.log(`${i+1}:$i{el}`);
// }

// console.log([...menu.entries()]);

// Video 110 s9
// const game = {
//     team1: "Bayern Munich",
//     team2: "Borrussia Dormund",
//     players: [
//         [
//             "Neuer",
//             "Pavard",
//             "Martinez",
//             "Alaba",
//             "Davies",
//             "Kimmich",
//             "Goretzka",
//             "Coman",
//             "Muller",
//             "Gnarby",
//             "Lewandowki",
//         ],
//         [
//             "Burki",
//             "Schulz",
//             "Hummels",
//             "Akanji",
//             "Hakimi",
//             "Weigl",
//             "Wisel",
//             "Hazad",
//             "Brand",
//             "Sacnchi",
//             "Gotze",
//         ],
//     ],
//     score: "4:0",
//     scored: ["Lewandowki", "Ganrby", "Lewandowki", "Hummels"],
//     date: "Nov 9th 2037",
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //  2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //  4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // 5.
// const {odds: {team1, x: draw, team2},} = game;
// console.log(team1,draw,team2);

// // 6.
// const printGoals = function (...players){
//     console.log(players);
//     console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// Video 109 s9
// const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// };
// const rest2 = {
//     name: 'LaPiazza',
//     owner: 'Giovanni Rossi',
// }

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nullish assignment operator(null or underfined)
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// Video 108 s9

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nulish: null and underfined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Video 107 s9

// console.log('---------------- OR --------------');

// // Use any data type, return Any data type, short-circuiting
// console.log(3 || 'Jona');
// console.log('' || 'Jona');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);


// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---------------- AND --------------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// // Ví dụ thực tế Practical example
// if(restaurant.orderPizza){
//     restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


// Toán tử OR sẽ trả về giá trị trung thực đâu tiên của tất cả các toán hạng hoặc đơn giản là giá trị cuối cùng nếu tất cả giá trị của chúng đều sai(Dùng OR để đặt các giá trị mặc định)
// Toán tử AND sẽ trả về giá trị falsy đầu tiên hoặc giá trị cuối cùng nếu tất cả chúng đều true(Dùng AND để thực thi mã trong toán hạng thứ 2 nếu toán hạng đầu tiên đúng)




