// Step 2: Create Customer Records
// Create an array called customers.
// Inside this array, create at least three customer objects.
// Each customer object should have the following properties:
// name (string)
// email (string)
// purchases (array of strings)

customers = [
    {
        name: "somya chawla",
        email: "chawla22@usf.edu",
        purchases: ["Laptop", "Smartphone"]
    },
    {
        name: "john doe",
        email: "doe@info.com",
        purchases: ["Tablet", "Smartwatch"]
    },

    {
        name: "jane smith",
        email: "smith@info.com",
        purchases: ["Headphones", "Smart Speaker"]
    }
];

console.log("creating an array of  3 customers ...!!!");
console.log(customers);


// Step 3: Add and Remove Data
// Add a new customer to the customers array using .push().

customers.push({
    name: "alice johnson",
    email: "jhonson@info.com",
    purchases: ["E-reader", "Bluetooth Speaker"],
});

console.log("after adding a new customer...!!!");
console.log(customers);


// Remove the first customer using .shift().
console.log("after removing  the first customer...!!!");
customers.shift();
console.log(customers);


