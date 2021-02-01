      //Requête AJAX vers l'API
const cartProductDetails = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/api/cameras/" + id);
  request.send();
  request.onreadystatechange = function () {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
 

    }
  };
};
cartProductDetails();

      