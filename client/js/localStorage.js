//Variables
const cartHtmlElement = document.getElementById('cart__table');
//Local Storage
let productLocalStorage = JSON.parse(localStorage.getItem("Procut items"));
let productQuantityLocalStorage = parseInt(localStorage.getItem("Quantity"));
console.log(productLocalStorage[0].productPrice);
//console.log(typeof productQuantityLocalStorage);
//Cart
if (productLocalStorage === null) {
    cartHtmlElement.innerHTML = "<h2>Votre panier est vide</h2>" 
} else {
cartHtmlElement.innerHTML =`
<table>
<tr>
  <th>Article</th>
  <th>Quantité</th> 
  <th>Subtotal</th>
</tr>
<tr>
  <td>
    <div class="cart-info">
      <img src="${productLocalStorage[0].productImage}" width="200" />
      <div>
        <p>${productLocalStorage[0].productName}</p>
        <small>Lentille: </small><br />
        <small>Prix: ${productLocalStorage[0].productPrice} €</small><br />
        <a href="">Retirer</a>
      </div>
    </div>
  </td>
  <td><input type="number" value="${productLocalStorage[0].quantity}" /></td>
  <td>${productLocalStorage[0].quantity * productLocalStorage[0].productPrice} €</td>
</tr>

</table>
<div class="total-price">
<table>
  <tr>
    <td>Subtotal</td>
    <td>650.00 €</td>
  </tr>
  <tr>
    <td>Tax (tva)</td>
    <td>35.00 €</td>
  </tr>
  <tr>
    <td><strong>Total T.T.C</strong></td>
    <td><strong>685.00 €</strong></td>
  </tr>
</table>
</div>
` 
}
;  

