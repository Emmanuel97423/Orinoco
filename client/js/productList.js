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
//activation et design product
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <tr>  
            <td><img src="${product.imageUrl}"
            <td>${product.name}</td>
            <td><h3>${product.price} €</h3></td>
            <td> ${product.lenses}</td>
            <td>
                   <div class="buttons-link">
                    <a href="productDetail.html?id=${product._id}&lenses=${product.lenses}" class="buttons btn">
                        <button class="btn"><ion-icon name="pricetag-outline"></ion-icon>Observer</button>
                    </a>
                  </div>
            </td>
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
