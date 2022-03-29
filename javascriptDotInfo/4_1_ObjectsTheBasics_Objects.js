//Tasks from https://javascript.info/object

//Hello, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Check for emptiness
function isEmpty(obj){
    function isEmpty(obj) {
        for (keys in obj) {
          return false
        }
        return true;
      }
}

//Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = salaries => {
    let total = 0;
    for (let person in salaries) {
        total += salaries[person];
    }
    return total;
}

//Multiply numeric property values by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] = 2 * obj[key];
        }
    }
  }