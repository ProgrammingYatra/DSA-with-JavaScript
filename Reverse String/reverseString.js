// -------------- 1st method :=--------------------

function Reverse1(str) {
  let s = str.split("").reverse();   // using Inbuild function
  return s;
}

let str = "rupam";
console.log(Reverse1(str));

// TC : O(N)
// SC : O(1)

//----------------- 2nd Method :=------------------

let result = [];
function Reverse2(str) {
  let s = str.split("");
  for (let i = s.length-1; i >= 0; i--) {    // backword Direction
    result.push(s[i]);
  }
  return result;
}
let str2 = "gupta";
console.log(Reverse2(str2));

// TC : O(N)
// SC : O(1)


// -------------- 3st method :=--------------------

// using two Pointer
let reverse3 =(str)=>{
    let s=Array.from(str)  //convert the string to Array
    let i=0;
    let j=s.length-1;
    while(i<j){
        let temp=s[i];
        s[i]=s[j];
        s[j]=temp;
        i++;
        j--;
    }
    return s
}
let str3 = "uttam";
console.log(reverse3(str3));

// TC : O(logn)
// SC : O(1)
