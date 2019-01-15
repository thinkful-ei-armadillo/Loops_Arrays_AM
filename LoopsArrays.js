function max(arr) {
let currMax = arr[0];
let i = 0;
while (i < arr.length) {
  if (currMax < arr[i]) {
    currMax = arr[i];
    }
  i++;
  }
  return currMax;
}

console.log(max([1, 2, 3, 4, 5]));
console.log(max([5, 4, 3, 2, 1]));

function min(arr) {
let currMin = arr[0];
let i = 0;
while (i < arr.length) {
  if (currMin > arr[i]) {
    currMin = arr[i];
    }
  i++;
  }
  return currMin;
}

console.log(min([1, 2, 3, 4, 5]));
console.log(min([5, 4, 3, 2, 1]));


function average(arr) {
  let sum = 0;
  arr.forEach((num) => sum += num); 
  return sum / arr.length;
}

let array = [5, 10, 15];
let array2 = [1, 2, 3];
console.log(average(array));
console.log(average(array2));


function repeat(fn, n) {
  i = 0;
  while (i < n) {
    fn();
    i++;
  }
}

function hello() {
console.log("Hello world");
}
function goodbye() {
console.log("Goodbye world");
}

repeat(hello, 5);
repeat(goodbye, 5);



function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
  if (fn(arr[i]) === true) {
    newArray.push(arr[i]);
    }
  }
  return newArray;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    return name[0] === 'R';
});

console.log(filteredNames);




function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return (function(location) {
  warningCounter++;
  console.log(`\"The ${typeOfWarning} hazard at ${location}!"\`);
  console.log(`\"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"\`);

}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const avalancheWarning = hazardWarningCreator('Avalanche!');
const hailStormWarning = hazardWarningCreator('Hail is Falling');









