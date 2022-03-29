//Tasks from https://javascript.info/constructor-new

//Two functions–one object
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

//Create a new Calculator
