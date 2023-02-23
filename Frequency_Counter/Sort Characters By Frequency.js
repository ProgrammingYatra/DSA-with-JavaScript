var frequencySort = function(s) {
    // Create a frequency counter of the characters in the string
    const counter = {};
    for (let char of s) {
      if (counter[char]) {
        counter[char]++;
      } else {
        counter[char] = 1;
      }
    }
    
    // Create an array of the unique characters in the string
    const uniqueChars = Object.keys(counter);
    console.log(uniqueChars)
    // Sort the unique characters in descending order of frequency
    uniqueChars.sort((a, b) => counter[b] - counter[a]);
    console.log(uniqueChars)
    // Build the sorted string by concatenating characters by frequency
    let sortedString = '';
    for (let char of uniqueChars) {
      sortedString += char.repeat(counter[char]);
    }
    return sortedString;
  };

  let  s = "tree";
  console.log(frequencySort(s))