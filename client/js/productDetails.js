const queryString = window.location.search;
console.log("queryString:", queryString);
const productDetailElement = document.getElementById(
  "container__product--detail"
);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const price = urlParams.get("price");
console.log("price:", price);
console.log(id);

//Requête vers l'API
const productDetails = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/api/cameras/" + id);
  request.send();

  request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let response = JSON.parse(this.responseText);
      console.log(response.name);
      productDetailElement.innerHTML = `      
    <div class="card">
        <div class="images">
          <div class="slider">
            <img src="${response.imageUrl}" alt="camera1" />
          </div>
          <div class="img-slider">
            <div class="imgs">
              <img src="${response.imageUrl}" alt="camera1" />
            </div>
            <div class="imgs">
              <img src="${response.imageUrl}" alt="camera1" />
            </div>
            <div class="imgs">
              <img src="${response.imageUrl}" alt="camera1" />
            </div>
          </div>
        </div>
        <div class="infos">
          <h1>${response.name}</h1>
          <div class="reviews">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            <ion-icon name="star-outline"></ion-icon>
          </div>

          <div class="price">
            <h2>${response.price} €</h2>
          <div class="lenses-choice">
             <label for="lenses-select">Selectionner un type de lentille:</label>
              <select name="lenses" id="lenses-select">
                <option value="value1">Option 1</option>
                <option value="value2">Option 2</option>
                <option value="value3">Option 3</option>
              </select>
            <product-lenses></product-lenses>
          </div>
          <div class="more-infos">
            <h5>Description</h5>
            <h5>Infos de base</h5>
            <h5>Fiche technique</h5>
          </div>
          <div class="info-content">
            <p>${response.description}</p>
          </div>
          <div class="buttons">
            <button class="btn">
              <ion-icon name="cart-outline"></ion-icon>Commander
            </button>
          </div>
        </div>
      </div>`;
    }
  };
};

productDetails();
//Création des composants pour les détails du produit
//Prix du produit
/*customElements.define(
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
);*/
