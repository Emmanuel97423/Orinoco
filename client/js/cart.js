//Variables
const firstNameOrder = document.getElementById("firstname");
const lastNameOrder = document.getElementById("lastname");
const userAdressorder = document.getElementById("adr");
const userEmail = document.getElementById("email");
const city = document.getElementById("city");
const formHtml = document.getElementById("form__order");
const totalElementHtml = document.getElementById("cart--total");
const subtotalElementHtml = document.getElementsByClassName("cart__subtotal");
let quantityInputs = document.getElementsByClassName("cart-quantity-input");
let cartLocalStorage = allStorage();

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartItemButtons = document.getElementsByClassName(
    "removeCartItemButton"
  );
  //Supression de l'element
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //suppression de l'element dans le local storage
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener("click", ProductRemoveStorageCart);
  }

  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}
function ProductRemoveStorageCart() {
  var archive = [],
    keys = Object.keys(localStorage),
    i = 0,
    key;

  for (; (key = keys[i]); i++) {
    localStorage.removeItem(key);
  }
  return localStorage;
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

/*function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}*/

function allStorageCart() {
  var archive = [],
    keys = Object.keys(localStorage),
    i = 0,
    key;

  for (; (key = keys[i]); i++) {
    archive.push(JSON.parse(localStorage.getItem(key)));
  }

  return archive;
}
allStorageCart();

//Total cart

let total = 0;
for (let i = 0; i < subtotalElementHtml.length; i++) {
  total += parseInt(subtotalElementHtml[i].innerHTML);
}

totalElementHtml.innerHTML = total.toFixed(2);
//Définision des tableaux et objets
let contact = {};
let productArr = [];
let orderProduct = allStorage();
let information = {};
//liste des Id des articles commandé
for (let i = 0; orderProduct.length > i; i++) {
  productArr.push(orderProduct[i].productId);
}
//requête AJAX vers order API
function orderPost() {
  contact = {
    firstName: firstNameOrder.value,
    lastName: lastNameOrder.value,
    address: userAdressorder.value,
    email: userEmail.value,
    city: city.value,
  };
  informations = {
    contact: contact,
    products: productArr,
  };
  localStorage.clear();
  localStorage.setItem("products", JSON.stringify(productArr));
  localStorage.setItem("contact", JSON.stringify(contact));
  const request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/api/cameras/order");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(informations));
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 201) {
      let response = JSON.parse(request.response);
      let orderId = response.orderId;

      localStorage.clear();
      localStorage.setItem("prixTotal", total.toFixed(2));
      localStorage.setItem("numeroDeCommande", orderId);
      window.location = "./orderConfirmation.html";
    } else {
      console.log(request.status);
    }
  };
}
//Ecoute de l'évenement soumission du formulaire de commande
formHtml.addEventListener("submit", function (e) {
  e.preventDefault();
  orderPost();
});
