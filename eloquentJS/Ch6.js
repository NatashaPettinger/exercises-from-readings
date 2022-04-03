//A vector type
class Vec {
    constructor(x, y) {
      this.x = x;
        this.y = y;
    }
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  // → Vec{x: 3, y: 5}
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  // → Vec{x: -1, y: -1}
  console.log(new Vec(3, 4).length);
  // → 5

//GROUPS
class Group {
    constructor(){
        this.arr = [];
    };
    add (value) {
      if (!this.arr.includes(value)) {this.arr.push(value)}
    }
    delete (value) {
      this.arr = this.arr.filter(x => x !== value);
    }
    has (value) {
      return this.arr.includes(value);
    }
    static from (x) {
      let group = new Group;
      for (let values of x) {
        group.add(values);
      }
      return group;
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false


//Iterable groups
