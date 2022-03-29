function likes(names) {
    switch (names.length) {
        case 0: return `no one likes this`;
        break;
        case 1: return `${names[0]} likes this`;
        break;
        case 2: return `${names[0]} and ${names[1]} like this`;
        break;
        case 3: return `${names[0]}, ${names[1} and ${names[2]} like this`
    }
  }

  function pigIt(str){
    let arr = str.split(' ');
    let pigLarr = arr.map(word => {
      for (let i = 0; i < word.length; i++) {
        return word.substring(1) + word.charAt(0) + 'ay';
      }
    })
    return pigLarr.join(' ');
  }



  arr = arr.forEach(x => {
    x.replace('E', '');
    x.replace('F', '');
    x.replace('I', '');
    x.replace('R', '');
    x.replace('U', '');
    x.replace('Y', '');
  })
  if (arr.length == 0) {
    return "Fake tweet.";
  } else {
    return arr; /*
    let count = 0;
    let i = 0;
    while (i < arr.length - 1) {
      if (arr[i] == arr[i + 1]){
        count += 1;;
        arr[(i + 1, 1)];
      } else {i++; count = 0}
    }*/
  }

  let arr = tweet.split('FURY');
  
  let arr1 = arr.map(x => 'a' + x);
  arr = arr1.forEach(x => {
    let arr2 = x.split('FIRE');
    let arr3 = arr2.map(x => 'b' + x);
    return arr3;
  })
  return arr;

  var fireAndFury = function(tweet) {
    const fire = 'and you';
    const fury = 'really';
    let countA = 0;
    let countB = 0;
    let str = '';
   
    fire.repeat(countA);
    fury.repeat(countB);
  
    
    let a = tweet.indexOf('FIRE')
    let b = tweet.indexOf('FURY')
    if (a < b) {
      
    }
    
  
    return "Fake tweet.";
  
  }
}


const data = 
     "Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 117.7,Nov 111.0,Dec 97.9" + "\n" +
     "London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9" + "\n" +
     "Paris:Jan 182.3,Feb 120.6,Mar 158.1,Apr 204.9,May 323.1,Jun 300.5,Jul 236.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" + "\n" +
     "NY:Jan 108.7,Feb 101.8,Mar 131.9,Apr 93.5,May 98.8,Jun 93.6,Jul 102.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" + "\n" +
     "Vancouver:Jan 145.7,Feb 121.4,Mar 102.3,Apr 69.2,May 55.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 59.6,Oct 116.3,Nov 154.6,Dec 171.5" + "\n" +
     "Sydney:Jan 103.4,Feb 111.0,Mar 131.3,Apr 129.7,May 123.0,Jun 129.2,Jul 102.8,Aug 80.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" + "\n" +
     "Bangkok:Jan 10.6,Feb 28.2,Mar 30.7,Apr 71.8,May 189.4,Jun 151.7,Jul 158.2,Aug 187.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" + "\n" +
     "Tokyo:Jan 49.9,Feb 71.5,Mar 106.4,Apr 129.2,May 144.0,Jun 176.0,Jul 135.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" + "\n" +
     "Beijing:Jan 3.9,Feb 4.7,Mar 8.2,Apr 18.4,May 33.0,Jun 78.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 18.0,Nov 9.3,Dec 2.7" + "\n" +
     "Lima:Jan 1.2,Feb 0.9,Mar 0.7,Apr 0.4,May 0.6,Jun 1.8,Jul 4.4,Aug 3.1,Sep 3.3,Oct 1.7,Nov 0.5,Dec 0.7";
const data1 =
     "Rome:Jan 90.2,Feb 73.2,Mar 80.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 147.7,Nov 121.0,Dec 97.9" + "\n" +
     "London:Jan 58.0,Feb 38.9,Mar 49.9,Apr 42.2,May 67.3,Jun 52.1,Jul 59.5,Aug 77.2,Sep 55.4,Oct 62.0,Nov 69.0,Dec 52.9" + "\n" +
     "Paris:Jan 182.3,Feb 120.6,Mar 188.1,Apr 204.9,May 323.1,Jun 350.5,Jul 336.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" + "\n" +
     "NY:Jan 128.7,Feb 121.8,Mar 151.9,Apr 93.5,May 98.8,Jun 93.6,Jul 142.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" + "\n" +
     "Vancouver:Jan 155.7,Feb 121.4,Mar 132.3,Apr 69.2,May 85.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 69.6,Oct 116.3,Nov 154.6,Dec 171.5" + "\n" +
     "Sydney:Jan 123.4,Feb 111.0,Mar 151.3,Apr 129.7,May 123.0,Jun 159.2,Jul 102.8,Aug 90.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" + "\n" +
     "Bangkok:Jan 20.6,Feb 28.2,Mar 40.7,Apr 81.8,May 189.4,Jun 151.7,Jul 198.2,Aug 197.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" + "\n" +
     "Tokyo:Jan 59.9,Feb 81.5,Mar 106.4,Apr 139.2,May 144.0,Jun 186.0,Jul 155.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" + "\n" +
     "Beijing:Jan 13.9,Feb 14.7,Mar 18.2,Apr 18.4,May 43.0,Jun 88.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 38.0,Nov 19.3,Dec 2.7" + "\n" +
     "Lima:Jan 11.2,Feb 10.9,Mar 10.7,Apr 10.4,May 10.6,Jun 11.8,Jul 14.4,Aug 13.1,Sep 23.3,Oct 1.7,Nov 0.5,Dec 10.7";
const towns = ["Rome", "London", "Paris", "NY", "Vancouver", "Sydney", "Bangkok", "Tokyo",
               "Beijing", "Lima", "Montevideo", "Caracas", "Madrid", "Berlin"]
               
function assertFuzzyEquals(actual, expected, msg){
    var inrange = Math.abs(actual - expected) <= 1e-2;
    Test.expect(inrange, msg || "abs(actual - expected) must be <= 1e-2. Expected was " + expected.toExponential(2) +", but got " + actual.toExponential(2));
}
describe("rainfall",function() {
it("Basic tests: mean, data",function() {  
    assertFuzzyEquals(mean("London", data), 51.199999999999996) 
    assertFuzzyEquals(mean("Beijing", data), 52.416666666666664)
})})
describe("rainfall",function() {
it("Basic tests: variance, data",function() {  
    assertFuzzyEquals(variance("London", data), 57.42833333333374)
    assertFuzzyEquals(variance("Beijing", data), 4808.37138888889)
})})

function mean(town, strng) {
    // Your code
  let townS = strng.split(`${town}:`);
  townS.shift();
  townS.forEach(x => x.split(','));
  townS.splice(12);
  let townNums = townS.map(x => x.slice(4));
  return townNums.reduce((a,b) => a + b, 0)/12;
}

function variance(town, strng) {
    // Your code
  let townS = strng.split(`${town}:`);
  townS.forEach(x => x.split(','));
  townS.splice(12);
  let townNums = townS.map(x => x.slice(4));
  return townNums;
}

function mean(town, strng) {
  // Your code
if (strng.includes(town)){
  let townTrim = strng.split(`${town}:`);
let townS = townTrim[1];
townS = townS.split(',');
townS.splice(11);
let townNums = townS.map(x => parseFloat(x.slice(4)));
return townNums.reduce((a,b) => a + b)/townNums.length;
} else {return "-1"}

}

function variance(town, strng) {
  // Your code
if (strng.includes(town)) {
  let townTrim = strng.split(`${town}:`);
let townS = townTrim[1];
townS = townS.split(',');
townS.splice(11);
let townNums = townS.map(x => parseFloat(x.slice(4)));
let meanA = townNums.reduce((a,b) => a + b, 0)/townNums.length;
let townVar = townNums.map(x => (x - meanA) ** 2);
return townVar.reduce((a,b) => a + b, 0)/townVar.length;
} else {return "-1"}
}




//Last version of "rainfall" kata, 6kyu
function mean(town, strng) {
  // Your code
if (strng.includes(town)){
  let townTrim = strng.split(`${town}:`);
  let townS = townTrim[1];
  townS = townS.split(',');
  townS.splice(12);
  let townNums = townS.map(x => parseFloat(x.slice(4)));
  let meanA = townNums.reduce((a,b) => a + b, 0)/townNums.length;
  return meanA;
} else {return "-1"}

}

function variance(town, strng) {
  // Your code
if (strng.includes(town)) {
  let townTrim = strng.split(`${town}:`);
  let townS = townTrim[1];
  townS = townS.split(',');
  townS.splice(12);
  let townNums = townS.map(x => parseFloat(x.slice(4)));
  let meanA = townNums.reduce((a,b) => a + b, 0)/townNums.length;
  let townVar = townNums.map(x => (x - meanA) ** 2);
  return townVar.reduce((a,b) => a + b, 0)/townVar.length;
} else {return "-1"}
}

function presses(phrase) {
  const keyboard = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz', ' '];
  const numbers = ['1234567890']
  
  let phraseArr = phrase.toLowerCase().split('');
  let count = 0;
  let type = 'keyboard'
  phraseArr.forEach(x => {
    keyboard.forEach(y => {
      if (y.indexOf(x) >= 0 && type === 'keyboard') {
        count = count + y.indexOf(x) + 1;
      } else if (y.indexOf(x) >= 0 && type === 'numbers') {
        type = 'keyboard';
        count = count + y.indexOf(x) + 2;
      }
    })
    numbers.forEach(z => {
      if (z.indexOf(x) > -1 && type === 'keyboard') {
        type = 'numbers';
        count += 2
      } else if (z.indexOf(x) > -1 && type === 'numbers') {
        count += 1;
      }
    })
  })
  return count;
}

let u
  
  if (arr[0] === arr[1] || arr[0] === arr[2]) {
    u = arr.reduce((a,b) => a + b) - (arr.length - 1)*arr[0] 
  } else if (arr[1] === arr[2]) {
    u = arr.reduce((a,b) => a + b) - (arr.length - 1)*arr[1] 
  }
  function isNumber(val) {
    return (val > u - .1 && val < u + .1)
  }

  return arr.filter(isNumber)[0];


  function amountOfPages(summary){
    let noDigs = summary.toString().length;
    
    let sum = 0;
    for (let i = noDigs; i > 0; i--) {
      summary/Math.pow(10, noDigs - 1);
    }
  
  25 - 10 = 15 * 2 = 30
  (summary - Math.pow(10, noDigs - 1)) * noDigs;
    }
  numbers 1-9 = 9 digits
  numbers 10-99 : 180 digits
  numbers 100-999 : 2700 digits
  numbers 1000-9999 : 36000 digits
  numbers 10000-99999 : 450000 digits
  numbers 100000-999999 : 5400000 digits
  
  if (summary < 9) {
    return summary;
  } else if (summary < 189) {
    return (summary - 9)/2 + 9
  } else if (summary < 2889) {
    return (summary - (summary - 9)/2)/3 + 90 + 9
  } else if (summary < 38889) {
    return (summary - (summary - (summary - 9)/2)/3)/4 + 900 + 90 + 9
  } else if (summary < 488889) {
    return (summary - (summary - (summary - (summary - 9)/2)/3)/4)/5 + 9000 + 900 + 90 + 9
  }
  
  
  switch (summary < a) {
      case (summary < 9): 
      return summary;
      break;
      case (a = 99):
      return 9 + (100 - summary) * 2
      break;
      case (a = 999):
      return 9 + 180 + ()
  }

  //phone directory
  function phone(strng, num) {
    let unordStrng = strng.split('\n').filter(x => x.includes(num))
    return unordStrng
  }

  function phone(strng, num) {
    let unordStrng = strng.split('\n').filter(x => x.includes(num))
    if (unordStrng.length === 0) return `Error => Not found: ${num}`
    let phone = num;
    let name = unordStrng.substring(strng.lastIndexOf('<') + 1, strng.lastIndexOf('>'))
    return name
  }

//Closest and Smallest
  function  closest(strng) {
    //return array of numbers
    strng = strng.split(' ');
    //return empty array if no numbers given
    if (strng.length === 1) return strng = [];
    //calculate weights of numbers
    let weights = strng.map(x => {
      return x = x.split('').reduce((a,b) => Number(a) + Number(b), 0)
    })
    //order the weights from small to large
    let ordWei = weights.sort((a,b) => a-b)
    //find the difference in weights
    let weiDiff = [];
    for (let i = 0; i < ordWei.length - 1; i++) {
      weiDiff.push(ordWei[i + 1] - ordWei[i])
    }
    //find the smallest difference of weights
    let minDiff = Math.min(...weiDiff);
    //find the index of the smallest difference of weights
    let minDiffInd = weiDiff.indexOf(minDiff);
  
    //map the index back to the indices of the two weights that are the closest in the SORTED weight array
    let twoWeiIndS1 = ordWei[minDiffInd];
    let twoWeiIndS2 = ordWei[minDiffInd + 1];
    //find the indices of the two weights in the UNSORTED weight array
    let twoWeiIndU1 = weights.indexOf(twoWeiIndS1); 
    let twoWeiIndU2 = weights.indexOf(twoWeiIndS2);
    return [[weights[twoWeiIndU1], twoWeiIndU1, strng[twoWeiIndU1]],[weights[twoWeiIndU2], twoWeiIndU2, strng[twoWeiIndU2]]]
  }

  //Find the smallest
  function smallest(n) {
    n = n.toString().split('').map(x=>Number(x))
    let min = Math.min(...n);
    let ind = n.indexOf(min)
    let indJ = 0
    let newN = n.concat();
  
      while (newN[0] === min) {
        newN.shift();
        min = Math.min(...newN);
        ind = n.indexOf(min);
        indJ = indJ + 1;
      }
      newN = n.slice(0, indJ).concat(n.slice(ind, ind + 1)).concat(n.slice(indJ, ind)).concat(n.slice(ind + 1))
  
      
      return [Number(newN.join('')), ind, indJ]
  }