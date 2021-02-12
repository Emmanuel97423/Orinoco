//Variables
const cartHtmlElement = document.getElementById("table__data");
const cartSubtotalHtmlElement = document.getElementById("table__subtotal");
//Local Storage
let productLocalStorage = allStorage();

//Cart
const cart = () => {
  if (!productLocalStorage) {
    cartHtmlElement.innerHTML = "<h1>Votre panier est vide</h1>";
    console.log("No product");
  } else {
    let result = "";
    productLocalStorage.forEach(function (item) {
      let productSubtotal = (item.productPrice / 100) * item.quantity;

      result += `
            <tr>
              <td>
                <div class="cart-info">
                  <img src="${item.productImage}" width="200" />
                  <div>
                    <p>${item.productName}</p>
                    <small>Lentille: </small><br />
                    <small>Prix: ${(item.productPrice / 100).toFixed(
                      2
                    )} €</small><br />
                    <a class="removeCartItemButton" href="#">Retirer</a>
                  </div>
                </div>
              </td>
              <td><input class="cart-quantity-input" type="number" value="${
                item.quantity
              }" /></td>
              <td> <p class="cart__subtotal">${
                productSubtotal.toFixed(2) + " €"
              }</p></td>
              </tr>         
                `;
      return productSubtotal;
    });

    cartHtmlElement.innerHTML = result;
    const productSubtotalHtmlElement = document.querySelector(
      ".cart__subtotal"
    );
  }
};
cart();

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
