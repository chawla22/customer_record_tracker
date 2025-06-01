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


//   Step 4: Update Customer Info
// Update the email of one existing customer.

console.log("updating the email of the customer now...!!!");
customers[1].email = "somyachawala22@usf.com";

// Log the updated email of the  customer.
console.log(customers[1].email);
console.log(customers);


// Add a new purchase to a customer’s purchases array using .push().
customers[1].purchases.push("Wireless Charger");

console.log("after adding a new purchase to the customer...!!!");
console.log(customers[1].purchases);

//  Step 5: Display Customer Information 
console.log("Displaying customer information...!!!");
// Loop through the customers array using .forEach().
customers.forEach((customer) => {
    console.log("Customer.." + customer.name);
    console.log("Email:" + customer.email);
    console.log("Purchases:");
    customer.purchases.forEach((purchase) => {
                console.log("---"+purchase);                
    });
    console.log("-------------------------");
});



//  Step 6: Display Customer Information 
// Display customer information using template literals.
console.log("Displaying customer information using template literals...!!!");
// Log each customer’s name, email, and total number of purchases using template literals.
customers.forEach((customer) => {
    console.log(`Customer:      ${customer.name}`);
    console.log(`Email:         ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchases.length}`);
    console.log("-------------------------");
});
