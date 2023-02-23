
// Alorithms :=
// step-1 : Create the object and assign the frequency;
// step-2 : find the unique keys inside the object ;
// step-3 : Sort the unique numbers in descending order of frequency
// step-4 : slice the unique element

var topKFrequent = function (nums, k) {
  const counter = {};
  for (let num of nums) {
    if (counter[num]) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }
  console.log(counter);
  // Create an array of the unique numbers in the array
  const uniqueNums = Object.keys(counter);
  console.log(uniqueNums);
  // Sort the unique numbers in descending order of frequency
  uniqueNums.sort((a, b) => counter[b] - counter[a]);
  console.log(uniqueNums);
  // Return the top k frequent elements
  return uniqueNums.slice(0, k);
};

let nums = [1, 1, 1, 2, 2, 2, 2, 3],
  k = 2;
console.log(topKFrequent(nums, k));