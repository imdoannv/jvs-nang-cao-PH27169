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
// // // // Video 125 s9 - Video fisnh s9
const flights = 
'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Deparure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')){
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? 'X' : ''}${type.replaceAll(
        '_',
        ' '
    )} ${getCode(from)} ${getCode(to)} (${time.replace(':','h')})`.padStart(36);
    console.log(output);
}






// // // // Video 124 s9
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));


// document.querySelector('button').addEventListener('click', function(){
//     const text = document.querySelector('textarea').value;
//     const rows = text.split('\n');
//     for(const [i, row] of rows.entries){
//         const [first, second] = row.toLowerCase().trim().split('_');
        
//         const output = `${first}${second.replace(
//             second[0],
//             second[0].toUpperCase()
//         )}`;
//         console.log(`${output.padEnd(20)} ${'<3'.repeat(i+1)} `);
//     }
// });




// // Video 123 s9
// // Phan tach Split

// // Split and join 
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName , lasName] = 'Jonas Schmedmann'.split('');

// const newName = ['Mr.', firstName, lasName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function(name){
//     const names = name.split(' ');
//     const namesUpper = [];

//     for (const n of names){
//         // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//         namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     }
//     console.log(namesUpper.join(' '));
// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('nguyen doan');

// //padding: const 
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Doanf'.padStart(20, '+').padEnd(30, '+'));


// // che bot so giong card atm 
// const maskCreditCard = function (number){
//     const str = number + '';
//     const last = str.slice(-4);
//     return last.padStart(str.length, '*');
// };
//  console.log(maskCreditCard(4643116561997));
//  console.log(maskCreditCard('33454353124234365697'));
//  console.log(maskCreditCard('464315453453416561997'));

// //  Lap lai Reapeat 
// const message2 = 'Bad weather, All Departues Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function(n){
//     console.log(`There are ${n} planes in line ${'<3'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// // deverloper.mizilla.org mdn string replace









// // Video 122 s9
// const airline  = 'TAP Air Portugal';
// console.log(airline.toLowerCase()); //Viet thuong
// console.log(airline.toUpperCase()); //Viet hoa

// // Fix captitalization in name
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Check mail
// const email = 'doannvph27169@fpt.vn';
// const loginEmail = ' Doannvph27169@fpt.vn \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // Replacing
// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&','$').replace(',','.');
// console.log(priceUS);

// const announcement = 'All passenger come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('Part of the NEW ARirbus family');
// }

// // Practice exercise
// const checkBaggage = function (items){
//     const baggage = items.toLowerCase();
//     if(baggage.includes('knife') || baggage.includes('gun')){
//         console.log('You are NOT allowed on broard');
//     }else {
//         console.log('Wellcome aboard!');
//     }
// };

// checkBaggage ('I have a laptop, some Food and a pocket Knife');
// checkBaggage ('Socks and camera');
// checkBaggage('Got some nacks and a gun for protection');







// // // Video 121 s9
// const airline  = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r')); //không tính dấu cách
// console.log(airline.lastIndexOf('r')); //Tính dấu cách
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4,7));

// console.log(airline.slice(0, airline.indexOf(' ')));// Đầu tiên
// console.log(airline.slice(airline.lastIndexOf(' ')+1)); //Cuối cùng

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat){
//     // B and E are middle
//     const s = seat.slice(-1);
//     if( s === 'B' || s === 'E')
//         console.log('You got the middle seat !');
//     else console.log('You got lucky :/');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Jonas'));
// console.log(typeof new String('Jonas'));

// console.log(typeof new String('Jonas').slice(1));


// // Video 120 s9
const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [69, 'Red card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card'],
]);


// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2.
// gameEvents.delete(64);

// // 3.
// console.log(
//     `An event happend, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//     `An event happend, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const [min, event] of gameEvents){
//     const half = min <= 45? 'FIRST' : 'SECOND';
//     console.log(`[${half} HALF] ${min}: ${event}`);
// }


// // Video 119 s9 Uu nhuoc dieem cua arrays, set,map,object


// // Video 118 s9
// const question = new Map([
//     ['question', 'What is the best programming language in the woeld?'],
//     [1, 'C'],
//     [2,'Java'],
//     [3,'JavaScript'],
//     ['correct', 3],
//     [true,'Correct <3'],
//     [false,'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for( const [key,value] of question){
//     if(typeof key === 'number')
//     console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// question.get(question.get(question.get('correct')=== answer));

// // Conver map to array 
// console.log([...question]);
// // console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());



// // Video 117 s9
// const rest = new Map();
// rest.set('name', 'Classsico Italiano');
// rest.set(1,'Firenze, Italy');
// console.log(rest.set(2,'Lisbon, Portugal'));

// rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true, 'We are open :D').set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// rest.set([1,2], 'Test');
// rest.set(document.querySelector('h1','Heading'));
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));




// // Video 116 s9
// // Tập hợp
// const ordersSet = new Set(['Pasta', 'Pizza','Pizza', 'Rissoto', 'Pasta', 'Pizza']);
// console.log(ordersSet);

// // console.log(new Set('Jonas'));

// // console.log(ordersSet.size);

// // kiem tra co hay khong
// // console.log(ordersSet.has('Pizza'));
// // console.log(ordersSet.has('Bread'));

// // Them san pham
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// // Xoa san pham
// ordersSet.delete('Risotto');
// // Xoa all
// // ordersSet.clear();
// console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);


// // Video 114 s9

// Property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties){
//     openStr += `${day},`;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key , values]
// for(const [key, {open , close}] of entries){
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }


// // Video 113 s9
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




// // Video 111 s9
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()){
//     console.log(`${i+1}:$i{el}`);
// }

// console.log([...menu.entries()]);


const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dormund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowki",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Wisel",
            "Hazad",
            "Brand",
            "Sacnchi",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowki", "Ganrby", "Lewandowki", "Hummels"],
    date: "Nov 9th 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


// // Video 115 s9
// 1.
// for( const [i, player] of game.scored.entries()){
//     console.log(`Goal $(i+1): $(player)`);
// }

// // 2.
// const odds = Object.values (game.odds);
// let average = 0;
// for(const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)){
//     const teamStr = team === 'x' ? 'draw' :`victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} ${odd}`);
// }
// // Odd of victory Bayern Munich 1.33
// // script.js:190 Odd of draw 3.25
// //script.js:190 Odd of victory Borrussia Dormund 6.5


// // Video 110 s9
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

// // Video 109 s9
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

// // Video 108 s9

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nulish: null and underfined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // Video 107 s9

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




