import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");

  // Check if cartItems is defined and that the cart contains items
  // before displaying them
  if (cartItems && cartItems.length > 0) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item, item.Id))
    document.querySelector(".product-list").innerHTML = htmlItems.join("");

  }


  // let cartCard = document.querySelector('.x-button');

  // cartCard.addEventListener('click', () => {
  //   let productId = cartCard.getAttribute('id');
  //   console.log(productId);
  // });

  // for (let i = 0; i < cartItems.length; i++) {
  //   console.log(cartItems[i].Id);
  // }

}

function cartItemTemplate(item, id) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>
<span class="x-button" id="${id}">X</span>`;

  return newItem;
}





export default renderCartContents;