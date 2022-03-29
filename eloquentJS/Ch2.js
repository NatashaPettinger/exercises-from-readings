// Your code here. Looping a Triangle
let outPut = '';
for (let i = 0; i < 7; i++) {
  outPut = outPut + '#';
  console.log(outPut);
}




// Your code here. FizzBuzz
for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
          console.log("FizzBuzz")
      } else if (i % 3 == 0){
        console.log("Fizz")
      } else if (i % 5 == 0){
        console.log("Buzz")
      } else {
        console.log(i)
      }
    }



// Your code here. Chessboard

let grid = 12
let string88 = ""

for (let i = 0; i < grid; i++) {
  for (let j = 0; j <= grid; j++){
    if (j == grid) {
     string88 = string88 + "\n";
    } else if ((i + j)% 2 == 1){
     string88 = string88 + "#";
    } else {
     string88 = string88 + " "; 
    }
  }
}

console.log(string88)