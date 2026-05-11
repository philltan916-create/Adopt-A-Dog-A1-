const fruits = ['grape', 'banana', 'orange', 'dragonfruit', 'peach'];

console.log(fruits[0]);

fruits.push('kiwi');

console.log(fruits);

fruits.splice(2, 1);

console.log(fruits);

const fruitstring = fruits.join(',');

console.log(fruitstring);