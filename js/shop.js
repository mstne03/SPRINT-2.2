// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

/*const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'json_files', 'products.json');

fs.writeFileSync(directory, JSON.stringify(products));

console.log(directory);*/

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;
async function getProductData () {
    const getProducts = await fetch('./json_files/products.json');

    const products = await JSON.parse(getProducts);

    return products;
}

// Exercise 1

(async () => {

    let products = await getProductData();

    console.log(products);
});

function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
}

// Exercise 2
function cleanCart() {

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}