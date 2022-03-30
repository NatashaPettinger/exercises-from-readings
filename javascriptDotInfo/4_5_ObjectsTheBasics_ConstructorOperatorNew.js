//Tasks from https://javascript.info/constructor-new

//Two functions–one object
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

//Create a new Calculator
function Calculator() {

    this.read = function (){
        this.val1 = +prompt('First number:', 0);
        this.val2 = +prompt('Second number:', '0');
    };
    this.sum = function() {
        return this.val1 + this.val2
    };
    this.mul() = function() {
        return this.val1 * this.val2
    }
}
let calc = new Calculator();
calc.read();

//Create new Accumulator
function Accumulator(value) {
    currentValue = value;

    this.read = function() {
        this.value = this.value + prompt('New number:', 0);
    };
}