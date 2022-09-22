'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'], 
  order:function(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

orderDelivery: function({time,address
}){
  console.log(`Order recieved ${time}`);
},


 openingHours: {
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
    },
  },
};

restaurant.orderDelivery({
  time:'22:30',
  address: 'Del Sol'
});



const {name,openingHours,categories } = restaurant;

const {name:restaurantName, openingHours:hours, categories:tags} = restaurant;
console.log(restaurantName, hours,tags)


//default values
const {menu = [], starterMenu:starters = []} = restaurant;
console.log(menu,starters);


//mutating variables
//wrap into () so it works
let a = 111;
let b = 999;

const obj= {a:23, b:7, c:14};

({a,b} = obj);
console.log(a,b);

//nested objects
const {fri:{open,close}} = openingHours;
console.log(open,close)



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
const arr = [7,8,9];
//new elements the beginning

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);




