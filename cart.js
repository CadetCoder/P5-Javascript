function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems) || [];

  let productContainer = document.querySelector('.products');
  let totalContainer = document.querySelector('#summarySection');
  let cartSummary = document.querySelector('#full-cart');

  // add product to the cart

  // Cart Details
  if (cartItems.length > 0 && productContainer) {
    let output = '';
    let total = 0;
    cartItems.forEach(function (product) {
      output += `
      <div class="col-12 col-md-6 mx-auto product-container">
      <div class="card text-center">
      <div>${product.name}</div>
      <div class="text-center">$ ${product.price}</div> </div></div>
      `;
      total += product.price;
    }
    )
    productContainer.innerHTML = output;

    // Total price of the items in cart
    totalContainer.innerHTML = `
    <p class="font-weight-bold font">Grand Total $ ${total}</p>
    <button class="btn btn-danger btn-sm my-2 removeBtn">Clear cart</button></br>
    <a class="btn btn-sm btn-success my-2" role="button" href="./index.html">Continue shopping</a>`;

    const removeButton = document.querySelector('.removeBtn');

    // Button to remove items in the cart
    removeButton.addEventListener('click',
      function () {
        localStorage.removeItem("productsInCart");
        location.reload(true);
      });
  }
  else {
    //cart summary removed when cart is empty
    productContainer.innerHTML =
      '<div class="container my-5" id="empty-cart"><div class="col-12 col-md-9 mx-auto text-center"><h2 class="mb-5 font-weight-bold text-primary">Your Orinico cart is empty</h2><div class="text-center"><div class="card-body"><a class="btn btn-success" role="button" href="./index.html">Go shopping</a></div></div></div></div> ';

    cartSummary.classList.add('d-none');
  }
}

displayCart()