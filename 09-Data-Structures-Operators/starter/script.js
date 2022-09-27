'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  }

};




// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'], 
  order(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //es6 object literals
  openingHours,

orderDelivery({time,address
}){
  console.log(`Order recieved ${time}`);
},




};

restaurant.orderDelivery({
  time:'22:30',
  address: 'Del Sol'
});



// const {name,openingHours,categories } = restaurant;

// const {name:restaurantName, openingHours:hours, categories:tags} = restaurant;
// console.log(restaurantName, hours,tags)


// //default values
// const {menu = [], starterMenu:starters = []} = restaurant;
// console.log(menu,starters);


//mutating variables
//wrap into () so it works
// let a = 111;
// let b = 999;

// const obj= {a:23, b:7, c:14};

// ({a,b} = obj);
// console.log(a,b);

// //nested objects
// const {fri:{open,close}} = openingHours;
// console.log(open,close)



// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;

// console.log(x,y,z);

// let [main, ,secondary] = restaurant.categories;

// console.log(main,secondary);

//add empty element to get to the third item [first, , second]

// [main,secondary] = [ secondary, main];
// console.log(main, secondary);


// restaurant.order(2,0);

//nested destructuring
// const nested = [2,4, [5,6]];
// const [i, ,j] = nested;
// console.log(i,j);

// const [i, ,[j,k] ] = nested;
// console.log(i,j,k);

//default values
// const [p=1,q=1,r=1]= [8,9];
// console.log(p,q,r);


//Spread operator 
// const arr = [7,8,9];
//new elements the beginning

// const newArr = [1,2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

//copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays or more

// const mainJoin = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(mainJoin)


//spread operator uses
//1.build new arr or pass mulitiple values into a function.
//spread operator unpack and arr and rest is to pack into an arr

//spread because on right side of assignment operator
// const array = [1,2, ...[3,4]];
//rest bc on left side of = sign
// const [m,n, ...others] = [2,3,4,5];
// console.log(m,n, others);
//1 2 [3,4,5]

// const[pizza, ,risotto, ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood);

//SAME THING WITH OBJECTS. MAKES NEW OBJ 


//function
// const add = function(...numbers){
// let sum = 0;
// for (let i =0; i=numbers.length; i++) sum += numbers[i];
// console.log(sum)
// };

// add(2,3);
// add(5,3,7,2);


//looping arrays - for of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

//arr w.index
for (const [i, el] of menu.entries()){
  console.log(`${i+1}:${el}`);
}

//arr iterator
// console.log([...menu.entries()]);




