// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

let total = 0;

const countProduct = document.querySelector('#count_product');
const totalPrice = document.querySelector('#total_price');
const cartList = document.querySelector('#cart_list');

// Exercise 1

function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    const productExist = cart.find(product => product.id === id);

    // 2. Add found product to the cart array
    productExist ?
                    productExist.quantity++ :
                    cart.push({
                        ...products.find(product => product.id === id),
                        quantity : 1
                    });

    total++;
    countProduct.innerHTML = total;
}

// Exercise 2
function cleanCart() {
    cart.length = 0;
    total = 0;
    totalPrice.innerHTML = total;
    cartList.innerHTML = "";
    countProduct.innerHTML = total;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let cartPrice = cart.reduce(
        (acc, act) => 
            acc +
            ((act.offer && act.quantity >= act.offer.number) ? 
            applyPromotionsCart(act) : act.price) * act.quantity, 
        0
    );

    totalPrice.innerHTML = cartPrice.toFixed(2);
}

// Exercise 4
function applyPromotionsCart(product) {
    // Apply promotions to each item in the array "cart"
    return (product.price - product.price*(product.offer.percent/100)).toFixed(2);
}

// Exercise 5
function printCart() {
    calculateTotal();
    // Fill the shopping cart modal manipulating the shopping cart dom
    cartList.innerHTML = "";
    const products = cart.map(p => {
        const cartTable = document.createElement('tr');
        cartTable.innerHTML = 
                        `
                        <th scope = "row">${p.name}</th>\n
                        <td>$${p.price}</td>\n
                        <td>${p.quantity}</td>\n
                        <td>$${
                            (p.offer && p.quantity >= p.offer.number) ? 
                            ((p.price - p.price*(p.offer.percent/100))*p.quantity).toFixed(2)
                            :(p.price*p.quantity).toFixed(2)
                        }</td>
                        `;
        return cartTable;
    });

    cartList.append(...products);
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    
}

function open_modal() {
    printCart();
}