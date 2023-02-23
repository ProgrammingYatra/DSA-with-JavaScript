// Algorithms :=
// step-1 : find the length of both the string if not equal then return false;
// step-2 : create a object ;
// step-3 : use for loop for string the values inside the object;
// step-4 : use for loop for check the values one by one and decrement the values
// step=5 : if all step find then return the output

function anagram(s, t) {
  if (s.length != t.length) {
    return false;
  }
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]]++;
    }
  }
  console.log(obj)

  for (let i = 0; i < t.length - 1; i++) {
    if (!obj[t[i]]) return false;
    else {
      obj[t[i]]--;
    }
  }
  return true
}

let str = "rupam";
let target = "mapur";
console.log(anagram(str, target));

