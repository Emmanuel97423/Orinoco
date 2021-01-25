//Création du composant Web pour la liste de produits
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

//Requête vers l'API
const data = function productListData() {
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/api/cameras");
  request.send();
  request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let response = JSON.parse(this.responseText);
      //Boucle pour la récupération des données
      const productNameList = () => {
        for (let i = 0; i < response.length; i++) {
          //Création d'un tableau contenant les données
          let productTab = [];
          productTab.push(response[i]);
          //Boucle pour chaque caractéristiques des produits
          for (product of productTab) {
            
            //Création des balises contenant les données
            const productElementHtml = `
            <tr class="product-item">
              <td><img src="${product.imageUrl}"</td>  
              <td><h3>${product.name}</h3></td>
              <td>${product.price} €</td> 
            `;
            console.log("productElementHtml:", productElementHtml);
            //console.log("product:", product.name);
            const productElement = document.getElementById("product-list");
            productElement.innerHTML = productElementHtml;
          }
        }
      };
      productNameList();
    }
  };
};
data();
