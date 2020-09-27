let array = [10, 20, 30, 40, 50];

for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

array.forEach(e => console.log(e * 3));

for(let i in array) {
  console.log(array[i]);
}

for(let e of array) {
  console.log(e);
}