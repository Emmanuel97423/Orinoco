//Variables
const cartHtmlElement = document.getElementById("table__data");
const cartData = document.createElement("tr");

console.log("cartHtmlElement:", cartHtmlElement);

//Local Storage
let productLocalStorage = allStorage();
console.log("productLocalStorage:", productLocalStorage);

//Cart

if (!productLocalStorage) {
  cartHtmlElement.innerHTML = "<h1>Votre panier est vide</h1>";
  console.log("No product");
} else {
  let result = "";

  productLocalStorage.forEach(function (item) {
    console.log("item:", typeof item);
    result += `
           <tr>
            <td>
              <div class="cart-info">
                <img src="" width="200" />
                <div>
                  <p></p>
                  <small>Lentille: </small><br />
                  <small>Prix: €</small><br />
                  <a href="" onClick="removeProduct()">Retirer</a>
                </div>
              </div>
            </td>
            <td><input type="number" value="" /></td>
            <td> <p>100€</p></td>
            </tr>
          
            
           
`;
  });
  cartHtmlElement.innerHTML = result;
}

//Supprimer produits
const removeProduct = () => {
  localStorage.removeItem("Product items");
};
//Get all localstorage
function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return values;
}
