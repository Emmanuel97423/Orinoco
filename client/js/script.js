//variables
const productsDOM = document.querySelector("#product-list__table");
const firstNameOrder = document.getElementById("firstname");
const lastNameOrder = document.getElementById("lastname");
const userAdressorder = document.getElementById("adr");
const userEmail = document.getElementById("email");
const city = document.getElementById("city");
const formHtml = document.getElementById("form__order");
const totalElementHtml = document.getElementById("cart--total");
const subtotalElementHtml = document.getElementsByClassName("cart__subtotal");
const orderId = document.getElementById("orderId");
const orderTotal = document.getElementById("orderTotal");
const orderIdLocalStorage = localStorage.getItem("numeroDeCommande");
const orderTotalLocalStorage = localStorage.getItem("prixTotal");
let quantityInputs = document.getElementsByClassName("cart-quantity-input");
//let cartLocalStorage = allStorage();
//Liste des produits
let get = function (url) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(request.responseText);
      } else {
        reject("erreur");
      }
    };
    request.open("GET", url);
    request.send();
  });
};
get("http://localhost:3000/api/cameras/")
  .then((response) => {
    let productName = response;
    console.log("productName:", productName);
  })
  .catch((error) => {
    console.error(error);
  });
