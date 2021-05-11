// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let nums = [1, 2, 3, 1];

//  BRUTE FORCE METHOD O(n^2) (Double forloop)
// function findDupe(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(findDupe(nums));

// If the array is SORTED then it takes less time to get the duplicate
//    O(nlog(n))

// function findDupe(arr) {
//   arr.sort();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[++i]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findDupe(nums));

// The FASTEST algorithm uses a datastructure
// Utilizing sets O(n)

function findDupe(arr) {
  //Intialize a new set
  let mySet = new Set();
  //Create a loop that iterates through the array
  for (let i = 0; i < arr.length; i++) {
    //Check if the set contains the value already
    if (mySet.has(arr[i])) {
      return true;
    }
    //If it doesn't have that value in the set keep adding the values into the set
    mySet.add(arr[i]);
  }
  //Return false if there are no duplicates
  return false;
}

console.log(findDupe(nums));
