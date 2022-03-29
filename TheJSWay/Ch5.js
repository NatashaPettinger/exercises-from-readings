//Chapter 5

//This is broken and needs fixed.

let fN = prompt('First name:');
let lN = prompt('Last name:');

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}`;
    return message;
}

console.log(sayHello(fN, lN));

//Number squaring
function square1(x){
    return x*x;
}

const square2 = x => x*x;

for (let i = 0; i <= 10; i++){
    console.log(square1(i));
}

//Minimum of two numbers

function min(x, y) {
    if (x < y) {
        console.log(x);
    } else if (x >= y) {
        console.log(y);
    } else {
        console.log('are you sure you typed in numbers?')
    }
}

//Calculator

function calculate(x, o, y) {
    if (o === '+') {
        return x + y;
    } else if (o === '-') {
        return x - y;
    } else if (o === '*') {
        return x*y;
    } else if (o === '/') {
        return x/y;
    }
}

//Circumference and area of a circle
//fix this 

function circ (rad) {
    return 2*Math.Pi*rad;
}
function area (rad) {
    return Math.Pi*(rad ** 2);
}
let rad = prompt("what is the radius");