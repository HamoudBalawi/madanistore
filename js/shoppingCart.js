const cartItems = JSON.parse(localStorage.getItem("proList"));
console.log(cartItems)
const cartContainer = document.querySelector(".shoppingcart-elements");
const totalContainer = document.querySelector(".total");
let total = 0;
cartItems.forEach(function (cartElement) {
  total += parseInt(cartElement.prices.regular_price.slice(0,3));
  cartContainer.innerHTML += `  
                            <div class="product-list">
                              <a href="details.html?id=${cartElement.id}"> 
                              <img src="${cartElement.images[0].src}"  class="cart-image cart-thumbnail" "alt="${cartElement.name}"/></a>
                              <div class="product-details">
                               <h5>${cartElement.name}</h5>
                               <p>${cartElement.categories[0].name}</p>
                              </div>
                              <p class="amount-detail">${cartElement.price_html}</p>
                            </div> `;
});
totalContainer.innerHTML = `Total: ${total}`;
