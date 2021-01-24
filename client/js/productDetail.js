//Création des composants pour les détails du produit
  //Prix du produit
customElements.define(
  "product-price",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("product-price");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);
  //Description du produit
customElements.define(
  "product-description",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("product-description");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);
  //Selection des lentilles
  customElements.define(
    "product-lenses",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("product-lenses");
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
          templateContent.cloneNode(true)
        );
      }
    }
  );
//Requête vers l'API
function productDetails() {
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/api/cameras");
  request.send();

  request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response[0]);
    }
  };
}

productDetails();
