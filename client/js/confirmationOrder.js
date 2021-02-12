//variables
const orderId = document.getElementById("orderId");
const orderTotal = document.getElementById("orderTotal");
const orderIdLocalStorage = localStorage.getItem("numeroDeCommande");
const orderTotalLocalStorage = localStorage.getItem("prixTotal");
const listCameralink = document.getElementById("list__camera--link");

orderId.innerHTML = orderIdLocalStorage;
orderTotal.innerHTML = orderTotalLocalStorage + " €";

listCameralink.addEventListener("click", (e) => {
  localStorage.clear();
});
