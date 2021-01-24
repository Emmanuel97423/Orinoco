//Création du composant pour la liste de produits
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

      //Récupération des données
      const productNameList = () => {
        for (let i = 0; i < response.length; i++) {
          const productName = response[i].name;
          //console.log("productName:", productName);
          const productdDescription = response[i].description;
          //console.log("productdDescription:", productdDescription);
          const productLenses = response[i].lenses;
          //console.log("productLenses:", productLenses);
          const productPrice = response[i].price;
          //console.log("productPrice:", productPrice);
          const productId = response[i]._id;
          //console.log("productId:", productId);
          return response;
        }
      };
      productNameList();
      console.log("productNameList():", productNameList());

      const productListHtml = document.getElementById("product-list");
      const elt = `<p>Hello</p>`;
      productListHtml.innerHTML = elt;
      
    }
  };
};
data();

