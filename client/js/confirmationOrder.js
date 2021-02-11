//variables
const orderId = document.getElementById("orderId");
const orderTotal = document.getElementById("orderTotal");
const orderIdLocalStorage = localStorage.getItem("numeroDeCommande");
const orderTotalLocalStorage = localStorage.getItem("prixTotal");

orderId.innerHTML = orderIdLocalStorage;
orderTotal.innerHTML = orderTotalLocalStorage + " €";
