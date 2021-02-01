//variables
const queryString = window.location.search;
const productDetailElement = document.getElementById(
  "container__product--detail"
);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

//Requête AJAX vers l'API
const productDetails = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/api/cameras/" + id);
  request.send();
  request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      let response = JSON.parse(this.responseText);
      //modification du DOM
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
          <div class="buttons" id="btn__order">
            <button class="btn btn-order" >
              <ion-icon name="cart-outline"></ion-icon>Commander
            </button>
          </div>
        </div>
      </div>`;
      //Itération du select pour les Lentilles
      const selectElementHtml = document.getElementById("lenses-select");
      const lenses = response.lenses;
      for (lense of lenses) {
        let select = document.createElement("option");
        select.value = lense;
        select.innerHTML = lense;
        selectElementHtml.appendChild(select);
      }
      //Initialisation du local storage

      const btnOrderProduct = () => {
        const cartStorage = localStorage;

        const btnOrderProductElement = document.getElementById("btn__order");
        if (btnOrderProductElement) {
          btnOrderProductElement.addEventListener("click", function (e) {
            e.stopPropagation();
            console.log("c'est cliqué!");
            cartStorage.setItem("Procut Name", response._id);
            cartStorage.setItem("Quantity", 1);
          });
        }
      };
      btnOrderProduct();
    }
  };
};
productDetails();

//Ecoute du bouton commander
