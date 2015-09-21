// 1. Create several grocery item objects with properties of
// name and price.
// 2. Store the grocery item objects in an array.
// 3. Loop through the array and print out the name and price
// on a new line.
// 4. Total up the amount with a label ‘total’.

var grocery = [
	{
		name: "apples",
		price: 3.25
	},
	{
		name: "eggs",
		price: 4.15
	},
	{
		name: "bread",
		price: 2.55
	},
	{
		name: "milk",
		price: 3.67
	},
];

grocery.forEach(function(el) {
	console.log(el.name + ": $" + el.price);
});

var total = 0;

grocery.forEach(function(el) {
	total += el.price;
});

console.log("Total Price: $" + total);