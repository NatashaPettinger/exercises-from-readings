//Tasks from https://javascript.info/object-methods

//Using "this" in object literal
function makeUser() {
    return {
      name: "John",
      ref() {
        return this;
      }
    };
  }


//Create a calculator
let calculator = {
    read() {
        this.val1 = Number(prompt('Number 1?', 0));
        this.val2 = Number(prompt('Number 2?', 0));
    },
    sum() {
        return this.val1 + this.val2;
    },
    mul() {
        return this.val1 * this.val2;
    },
};

//Chaining
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };