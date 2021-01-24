//Création des composants pour la page de confirmation
  
customElements.define(
    "confirm-page",
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById("confirm-page");
        let templateContent = template.content;
  
        const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
          templateContent.cloneNode(true)
        );
      }
    }
  );