// Your code here. Minimum

function min(a, b){
    return Math.min(a, b);
  };
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10



// Your code here. Recursion
let isEven = a => {
    function recurs(current){
     if (current == 0){
      return true;
     } else if (current == 1){
      return false;
     } else if (current < 0){
      return recurs(-current);
     } else {
      return recurs(current - 2);
     }
    }
     return recurs(a);
   }
   
   console.log(isEven(50));
   // → true
   console.log(isEven(75));
   // → false
   console.log(isEven(-1));
   // → ??


// Your code here. Bean counting
function countBs(abcs) {
    let counter = 0;
     for (let i = 0; i < abcs.length; i++){
     if (abcs[i] === 'B'){
       counter = counter + 1;
     };
    };
     return counter;
   };
   
   function countChar(abcs, char) {
    let counter = 0;
     for (let i = 0; i < abcs.length; i++){
     if (abcs[i] === char){
       counter = counter + 1;
     };
    };
     return counter;
   };
   
   console.log(countBs("BBC"));
   // → 2
   console.log(countChar("kakkerlak", "k"));
   // → 4