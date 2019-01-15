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
