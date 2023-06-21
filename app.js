// For loop
// for(let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// While loop

//let number = 2;

// while(number <= 10) {
//     console.log(number);
//     number += 2;
// }

// Do While loop

// let number = 1;

// do {
//     console.log(number);
//     number++;

// } while(number <= 5);

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // For of loop

// for(let number of numbers) {
//     console.log(number)
// }

const person = {
    name: "Seth",
    age: 29,
    city: "Bham"
};

for(let val of Object.keys(person)) {
    console.log(`${val}: ${person[val]}`)
}

// // arrayName.forEach() loop
// numbers.forEach(function(num) {
//     console.log(num);
// })