// Your code here. The sum of a range
function range(a, b, c = 1) {
    let rangeArr = [];
     for (let i = 0; i <= Math.abs(b-a); i++){
      rangeArr[i] = i*c + a;
    }
     return rangeArr;
   }
   
   function sum(arr) {
     let sumArr = 0
     for (let i = 0; i < arr.length; i++) {
       sumArr += arr[i];
     }
     return sumArr;
   }
   
   console.log(range(1, 10));
   // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   console.log(range(5, 2, -1));
   // → [5, 4, 3, 2]
   console.log(sum(range(1, 10)));
   // → 55

   // Your code here. Reversing an Array
function reverseArray(arr) {
    let revArr = [];
    for (let i = 0; i < arr.length; i++){
      revArr[i] = arr[arr.length - 1 - i];
    }
    return revArr;
  }
  
  function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length/2); i++){
      let pl = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = pl;
    }
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]


  //a list
  function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = {value: arr[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
      arr.push(node.value);
    }
    return arr;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20