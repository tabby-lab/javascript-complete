'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//   function printAge (){
//     const output = `you are ${age}, born in ${birthYear}`
//     console.log(output);

//     if(birthYear >= 1981 && birthYear <= 1996) {
//         const str = `Oh you are a millenial, ${firstName}`;
//         console.log(str);

//         function add(a, b) {
//             return a + b;
            
//         }
//         console.log(add(5, 1));
//     }
    


//   }
//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);


console.log(this);

const calcAge = function(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);

}

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);

}

calcAgeArrow(1991);