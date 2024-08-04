// Exercise 5.1
let arrayOfObjects = [
	{
  	"ID": 1,
    "name": "Bread",
    "Quantity": 3
  },
	{
  	"ID": 2,
    "name": "Eggs",
    "Quantity": 6
  },
  {
  	"ID": 3,
    "name": "Apples",
    "Quantity": 100
  },
  {
  	"ID": 4,
    "name": "Milk",
    "Quantity": 20
  },
  {
  	"ID": 5,
    "name": "Bananas",
    "Quantity": 0
  },
  {
  	"ID": 6,
    "name": "Oranges",
    "Quantity": 15
  }
]

console.log(arrayOfObjects)

// output
/*
[{
  ID: 1,
  name: "Bread",
  Quantity: 3
}, {
  ID: 2,
  name: "Eggs",
  Quantity: 6
}, {
  ID: 3,
  name: "Apples",
  Quantity: 100
}, {
  ID: 4,
  name: "Milk",
  Quantity: 20
}, {
  ID: 5,
  name: "Bananas",
  Quantity: 0
}, {
  ID: 6,
  name: "Oranges",
  Quantity: 15
}]*/



// Exercise 6.2
let arrayOfObjects = [{"ID": 1,"name": "Bread","Quantity": 3},{"ID": 2,"name": "Eggs","Quantity": 6},{"ID": 3,"name": "Apples","Quantity": 100},{"ID": 4,"name": "Milk","Quantity": 20},{"ID": 5,"name": "Bananas","Quantity": 0},{"ID": 6,"name": "Oranges","Quantity": 15}];

let sortedArrayOfObjects = arrayOfObjects.sort((i1, i2) => (i1.Quantity < i2.Quantity) ? 1 : (i1.Quantity > i2.Quantity) ? -1 : 0);

sortedArrayOfObjects = sortedArrayOfObjects.map(item => item.name);
console.log (sortedArrayOfObjects);

// output
// ["Apples", "Milk", "Oranges", "Eggs", "Bread", "Bananas"]





// Exercise 6.2
let arrayOfObjects = [{"ID": 1,"name": "Bread","Quantity": 3},{"ID": 2,"name": "Eggs","Quantity": 6},{"ID": 3,"name": "Apples","Quantity": 100},{"ID": 4,"name": "Milk","Quantity": 20},{"ID": 5,"name": "Bananas","Quantity": 0},{"ID": 6,"name": "Oranges","Quantity": 15}];

let sortedArrayOfObjects = arrayOfObjects.sort((i1, i2) => i1.name.localeCompare(i2.name)).map((item) => item.name); 
console.log(sortedArrayOfObjects);

// output
// ["Apples", "Bananas", "Bread", "Eggs", "Milk", "Oranges"]





// Exercise 7.1
let arrayOfNumbers = [5, 0.3, NaN, 2, -4, 2.1, Infinity];
let sortNumbers = (n1, n2) => {
    if (isNaN(n1)) {
  		return -1;
    } 
    else if (isNaN(n2)) {
  		return 1;
    } 
    else return n1-n2;
};
let sortedArrayOfNumbers = arrayOfNumbers.sort(sortNumbers);
console.log(sortedArrayOfNumbers);

// output
// [NaN, -4, 0.3, 2, 2.1, 5, Infinity]




// Exercise 8.1
let arrayOfNumbers = [5, 0.3, NaN, 2, -4, 2.1, Infinity];

for (let i=0; i<arrayOfNumbers.length; i++) {
	if (isFinite(arrayOfNumbers[i])) {
 		console.log(arrayOfNumbers[i].toFixed(2)); 
  }
}
// output
/*
"5.00"
"0.30"
"2.00"
"-4.00"
"2.10"
*/
