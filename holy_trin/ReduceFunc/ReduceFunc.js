
// // Uses of ReduceFunc 

// // Example 1: Sum of All Elements in an Array
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum); // Output: 15

// // Example 2: Flattening an Array of Arrays
// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
//     return accumulator.concat(currentValue);
// }, []);

// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// // Example 3: Grouping Objects by a Property
// const people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Bob', age: 25 },
//     { name: 'Alice', age: 22 },
//     { name: 'Bob', age: 30 }
// ];

// const groupedByName = people.reduce((accumulator, currentValue) => {
//     if (!accumulator[currentValue.name]) {
//         accumulator[currentValue.name] = [];
//     }
//     accumulator[currentValue.name].push(currentValue);
//     return accumulator;
// }, {});

// console.log(groupedByName);
// /* Output:
// {
//     Alice: [
//         { name: 'Alice', age: 21 },
//         { name: 'Alice', age: 22 }
//     ],
//     Bob: [
//         { name: 'Bob', age: 25 },
//         { name: 'Bob', age: 30 }
//     ]
// }
// */

// // Example 4: Counting Instances of Values in an Array
// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

// const countFruits = fruits.reduce((accumulator, currentValue) => {
//     if (!accumulator[currentValue]) {
//         accumulator[currentValue] = 0;
//     }
//     accumulator[currentValue]++;
//     return accumulator;
// }, {});

// console.log(countFruits);
// /* Output:
// {
//     apple: 2,
//     banana: 3,
//     orange: 2
// }
// */

// function createCounter() {
//     let count = 0; // This variable is enclosed by the inner functions
  
//     return {
//       increment: function() {
//         count++;
//         return count;
//       },
//       decrement: function() {
//         count--;
//         return count;
//       },
//       getCount: function() {
//         return count;
//       }
//     };
//   }

function createGame(){
    let score = 0; 

    function increaseScore(points){
        score += points; 
        return console.log(`+${points}pts`); 
    }
    function decreaseScore(points){
        score -= points; 
        console.log(`did you know cookies`);
        setTimeout() 
        return console.log(`-${points}pts`); 
    }
    function getScore(){
        return score; 
    }

    return {increaseScore, decreaseScore, getScore}; 
  }

const game = createGame(); 

game.decreaseScore(3); 
game.increaseScore(9); 
console.log(`Final score is ${game.getScore()} pts!`); 


  
//   const counter = createCounter();
  
//   console.log(counter.increment()); // 1
//   console.log(counter.increment()); // 2
//   console.log(counter.decrement()); // 1
//   console.log(counter.getCount());  // 1

  