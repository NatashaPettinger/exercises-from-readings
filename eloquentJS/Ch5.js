//End of chapter exercises from Eloquent JS 
//https://eloquentjavascript.net/05_higher_order.html

//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce((a, b) => a.concat(b))
console.log(arrays)
// → [1, 2, 3, 4, 5, 6]

//Your own loop
function loop(maxN, test, update, action){
    let m = maxN;
    while (test(m)){
      action(m);
      m = update(m);
    }
  }
    
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1

  //Everything
  function everyLoop(array, test) {
    for (let number of array) {
      if (!test(number)) return false;
    } return true;
  }
  
  function everySome(array, test) {
    return array.some(x => !test(x));
  }
  
  console.log(everySome([1, 3, 5], n => n < 10));
  // → true
  console.log(everySome([2, 4, 16], n => n < 10));
  // → false
  console.log(everySome([], n => n < 10));
  // → true

  //Dominant writing direction
  //Need to work on this one!!!!!
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let direction = groupName(item);
      let known = counts.findIndex(c => c.direction == direction);
      if (known == -1) {
        counts.push({direction, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
  function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({direction}) => direction != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "ltr";
  
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
  
    return scripts.map(({direction, count}) => {
      return `${Math.round(count * 100 / total)}% ${direction}`;
    }).join(", ");
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl