//variables
const productsDOM = document.querySelector("#product-list__table");

//cart
let cart = [];
//Requête pour obtention des données
class Products {
  async getProducts() {
    try {
      //requête FETCH
      let result = await fetch("http://localhost:3000/api/cameras", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await result.json();
      let products = data.map((product) => {
        const { name, description, price, lenses, _id, imageUrl } = product;
        return { name, description, price, lenses, _id, imageUrl };
      });

      return products;
    } catch (error) {
      console.error(error);
    }
  }
}
//activation product
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <tr>  
            <td><img src="${product.imageUrl}"
            <td>Nom: ${product.name}</td>
            <td>Prix: <h3>${product.price} €</h3></td>
            <td>Lentilles: ${product.lenses}</td>
            </tr>
        `;
    });
    productsDOM.innerHTML = result;
  }
}
//stockage des donnees
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const ui = new UI();
  //Obtention de tous les produits

  products.getProducts().then((products) => {
    ui.displayProducts(products);
  });
});
//Création du composant Web product-list
customElements.define(
  "product-list",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("product-list");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);
