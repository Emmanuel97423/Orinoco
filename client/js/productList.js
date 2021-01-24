let template = document.getElementById("product-list");
let templateContent =  template.content;
document.body.appendChild(templateContent);

customElements.define('product-list',
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('product-list');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
  }
})

function productList() {
    const request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response);
        //Récupération du nom
        const productNameList = ()=> {
            /*const productNameTitle = document.createElement('h3');
            productNameTitle.classList.add("product-name");
            const productListDiv = document.getElementById('product-list');
            productListDiv.appendChild(productNameTitle);
            const productListBloc = document.getElementsByClassName("product-name");
            productNameTitle.appendChild(productListBloc);
            productListBloc.InnerHTML = "hello";*/
            for (let i = 0; i<response.length; i++) {
                let name = response[i].name;
                console.log(name)
            }
       } 
       productNameList()

       
    }  
} 
request.open('GET', 'http://localhost:3000/api/cameras');
request.send();
}
productList();