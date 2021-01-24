//Création des composants pour le panier
  //Détail panier du produit
  customElements.define(
    "product-cart-details",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("product-cart-details");
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
          templateContent.cloneNode(true)
        );
      }
    }
  );