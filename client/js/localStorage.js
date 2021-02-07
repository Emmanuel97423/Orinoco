//Variables
const cartHtmlElement = document.getElementById("table__data");
const cartSubtotalHtmlElement = document.getElementById("table__subtotal");
//Local Storage
let productLocalStorage = allStorage();

//Cart

if (!productLocalStorage) {
  cartHtmlElement.innerHTML = "<h1>Votre panier est vide</h1>";
  console.log("No product");
} else {
  //Cart Data

  let result = "";
  productLocalStorage.forEach(function (item) {
    let productSubtotal = item.productPrice * item.quantity;

    result += `
            <tr>
              <td>
                <div class="cart-info">
                  <img src="${item.productImage}" width="200" />
                  <div>
                    <p>${item.productName}</p>
                    <small>Lentille: </small><br />
                    <small>Prix: ${item.productPrice}€</small><br />
                    <a class="removeCartItemButton" href="#">Retirer</a>
                  </div>
                </div>
              </td>
              <td><input class="cart-quantity-input" type="number" value="${item.quantity}" /></td>
              <td> <p class="cart__subtotal">${productSubtotal}</p>€</td>
              </tr>         
                `;
    return productSubtotal;
  });

  cartHtmlElement.innerHTML = result;
  const productSubtotalHtmlElement = document.querySelector(".cart__subtotal");
}

//Supprimer produits
const removeProduct = () => {
  localStorage.removeItem(productLocalStorage);
};
//Get all localstorage
function allStorage() {
  var archive = [],
    keys = Object.keys(localStorage),
    i = 0,
    key;

  for (; (key = keys[i]); i++) {
    archive.push(JSON.parse(localStorage.getItem(key)));
  }

  return archive;
}
//Total cart
const totalElementHtml = document.getElementById('cart--total');
const subtotalElementHtml = document.getElementsByClassName('cart__subtotal');
;
let total = 0;
for(let i=0; i < subtotalElementHtml.length; i++) {
  total += parseInt(subtotalElementHtml[i].innerHTML)
};
console.log(total)
totalElementHtml.innerHTML = total;

let contact = {};
let productArr = [];
let orderProduct =allStorage();
function cartTotal() {
  const fullNameOrder = document.getElementById('fullname');
  const userAdressorder = document.getElementById('adr');
  const userEmail = document.getElementById('email');
  const zip = document.getElementById('zip')
  const formHtml = document.getElementById('form__order')
  formHtml.addEventListener('submit', function(e) {
    e.preventDefault();
    contact = {
      Fullname: fullNameOrder.value,
      Adresse: userAdressorder.value,
      Email: userEmail.value,
      Zip: zip.value,
      Payment: total,
      ProductList: orderProduct,
     
      
    };
    productArr.push(orderProduct);
    localStorage.setItem('producList', JSON.stringify(productArr));
    localStorage.setItem('contact', JSON.stringify(contact));
    
    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/api/cameras/order');
    request.setRequestHeader('Content-type', 'application/json')
    request.send(contact);
   
  })
}
cartTotal();