const url = "https://www.madani.one/wp-json/wc/store/products?category=18";
const productContainer = document.querySelector(".products");

const proList = document.querySelector(".pro-list");
const totalContainer = document.querySelector(".total");

let cartArray = [];
async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
    console.log(getResults);
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
    button.onclick = function (event) {    
  const itemToAdd = getResults.find(item => item.id === parseInt(event.target.dataset.product))  
   cartArray.push(itemToAdd)
    console.log(cartArray)
    showShopCart(cartArray)
    localStorage.setItem("proList", JSON.stringify(cartArray))
  };
  });
 
  
  } catch (error) {
    console.log(error);
  }
}
getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `<div>
                                    <div class="product">
                                    <a href="details.html?id=${product.id}">
                                    <img src="${product.images[0].src}" class="product-image" alt="${product.name}"></a>
                                   <div class="product-detials">
                                    <h2>${product.name}</h2>
                                    <p class="pro-price">${product.price_html}</p>
                                   </div>
                                   <button data-product="${product.id}" class="cta-buy">Add To Cart</button>
                                   </div>`;
  });
}

const shopCart = document.querySelector(".shop-cart");
function showShopCart(cartItems) {
  shopCart.style.display = "block";
  proList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += parseInt(cartElement.prices.regular_price.slice(0,3));
    console.log(total)
    proList.innerHTML += `
                        <div class="pro-list">
                        <h5>${cartElement.name}</h5>
                        <a ref="details.html?id=${cartElement.id}" >
                        <img src="${cartElement.images[0].src}"  class="cart-image" "alt="${cartElement.name}" /></a>
                        </div>`;
  });
  totalContainer.innerHTML = `Total: ${total} kr`;
}

